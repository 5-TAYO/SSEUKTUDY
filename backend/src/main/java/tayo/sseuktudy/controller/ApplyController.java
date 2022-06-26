package tayo.sseuktudy.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tayo.sseuktudy.dto.apply.ApplyDto;
import tayo.sseuktudy.service.JwtService;
import tayo.sseuktudy.service.JwtServiceImpl;
import tayo.sseuktudy.service.apply.ApplyService;
import tayo.sseuktudy.service.apply.ApplyServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class ApplyController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final JwtService jwtService;
    private final ApplyService applyService;

    @Autowired
    ApplyController(JwtService jwtService, ApplyService applyService){
        this.jwtService = jwtService;
        this.applyService = applyService;
    }

    @PostMapping("/apply")
    public ResponseEntity<Map<String, Object>> applyStudy(@RequestBody ApplyDto applyDto, HttpServletRequest request, Model model){
        logger.info("스터디 신청 API 실행");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if(!decodeUserId.equals("access token timeout")){
            logger.info("사용 가능한 토큰!!");
            try{
                applyDto.setUserId(decodeUserId);

                int result = applyService.applyStudy(applyDto);

                if(result != 0){
                    resultMap.put("message", "SUCCESS");
                    status = HttpStatus.ACCEPTED;
                }else{
                    resultMap.put("message", "FAIL");
                    status = HttpStatus.INTERNAL_SERVER_ERROR;
                }
            }catch(Exception e){
                logger.error("예외 발생");
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!");
            resultMap.put("message","FAIL");
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }

}
