package tayo.sseuktudy.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;
import tayo.sseuktudy.dto.Comment.CommentRegistDto;
import tayo.sseuktudy.service.CommentServiceImpl;
import tayo.sseuktudy.service.JwtService;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class CommentController {
    private final JwtService jwtService;
    private final CommentServiceImpl commentServiceImpl;
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final String ACCESS_TOKEN_TIMEOUT = "access token timeout";
    @Autowired
    CommentController(JwtService jwtService, CommentServiceImpl commentServiceImpl){
        this.jwtService = jwtService;
        this.commentServiceImpl = commentServiceImpl;
    }
    @PostMapping("/comment")
    public ResponseEntity<?> resgistComment(@RequestBody CommentRegistDto commentRegistDto, HttpServletRequest request){

        Map<String, Object> resultMap = new HashMap<>();
        String accessToken = request.getHeader("access-token");
        String decodeUserId = jwtService.decodeToken(accessToken);
        HttpStatus status;
        if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)){
            try {
                commentRegistDto.setUserId(decodeUserId);
                commentServiceImpl.resgistComment(commentRegistDto);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            } catch (Exception e) {
                logger.error("로그아웃 실패 : {}", e);
                resultMap.put("message", e.getMessage());
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            resultMap.put("message", ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);

    }
    @GetMapping("/comment/{studyId}")
    public ResponseEntity<?> listComment(@PathVariable("studyId")int studyId, HttpServletRequest request){

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
            try {
                System.out.println(studyId);
                CommentInfoDto commentInfoDto = new CommentInfoDto();
                commentInfoDto.setStudyId(studyId);
                List<CommentInfoDto> commentList = commentServiceImpl.listComment(commentInfoDto);
                resultMap.put("message", "SUCCESS");
                resultMap.put("data",commentList);
                status = HttpStatus.ACCEPTED;
            } catch (Exception e) {
                logger.error("쪽지 조회 실패 : {}", e);
                resultMap.put("message", e.getMessage());
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }

        return new ResponseEntity<>(resultMap, status);

    }
}
