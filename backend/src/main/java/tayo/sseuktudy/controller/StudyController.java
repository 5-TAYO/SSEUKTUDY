package tayo.sseuktudy.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.study.*;
import tayo.sseuktudy.service.JwtService;
import tayo.sseuktudy.service.study.StudyService;
import tayo.sseuktudy.service.study.StudyServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class StudyController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final StudyServiceImpl studyService;
    private final JwtService jwtService;
    private final String ACCESS_TOKEN_TIMEOUT = "access token timeout";
    private final int SERVICE_RETURN_OKAY = 1;
    @Autowired
    StudyController(StudyServiceImpl studyService, JwtService jwtService){

        this.studyService = studyService;
        this.jwtService = jwtService;
    }

    @PostMapping("/study/regist")
    public ResponseEntity<Map<String, Object>> registStudy(@RequestBody StudyRegistDto studyRegistDto, HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        logger.info("스터디 등록 요청");
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)){
            logger.info("사용 가능한 토큰!!!");
            try{
                studyRegistDto.setStudyLeaderId(decodeUserId);

                studyService.registStudy(studyRegistDto);
                resultMap.put("message","SUCCESS");
                status = HttpStatus.ACCEPTED;

            }catch(Exception e){
                logger.error("예외 발생", e);
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!!");
            resultMap.put("message",ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @PutMapping("/study")
    public ResponseEntity<Map<String, Object>> modifyStudy(@RequestBody StudyModifyDto studyModifyDto, HttpServletRequest request ){
        logger.info("스터디 수정 API 실행");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)){
            logger.info("사용 가능한 토큰!!!");
            try{

                StudyUserIdDto studyUserIdDto = new StudyUserIdDto();
                studyUserIdDto.setStudyId(studyModifyDto.getStudyId());
                studyUserIdDto.setUserId(decodeUserId);

                if(studyService.leaderCheck(studyUserIdDto) != 1) {
                    resultMap.put("message", "FAIL");
                    status = HttpStatus.UNAUTHORIZED;

                }else{
                    studyService.modifyStudy(studyModifyDto);
                    resultMap.put("message","SUCCESS");
                    status = HttpStatus.ACCEPTED;
                }

            }catch(Exception e){
                logger.error("예외 발생", e);
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!!");
            resultMap.put("message",ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @DeleteMapping("/study")
    public ResponseEntity<Map<String, Object>> deleteStudy(@RequestParam int studyId , HttpServletRequest request){
        logger.info("스터디 삭제 API 실행");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;


        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)){
            logger.info("사용 가능한 토큰!!!");
            try{

                StudyUserIdDto studyUserIdDto = new StudyUserIdDto();
                studyUserIdDto.setStudyId(studyId);
                studyUserIdDto.setUserId(decodeUserId);

                if(studyService.leaderCheck(studyUserIdDto) != 1) {
                    resultMap.put("message", "FAIL");
                    status = HttpStatus.UNAUTHORIZED;

                }else{
                    studyService.deleteStudy(studyUserIdDto);
                    resultMap.put("message","SUCCESS");
                    status = HttpStatus.ACCEPTED;
                }

            }catch(Exception e){
                logger.error("예외 발생", e);
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!!");
            resultMap.put("message",ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @PostMapping("/study/list")
    public ResponseEntity<Map<String, Object>> getStudyByFilter(@RequestBody StudyFilterDto studyFilterDto, HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status = null;
        logger.info("스터디 조회 요청");

        // 토큰이 있으면 (유저 로그인 상태이면)스터디 좋아요 상태 표시
        if(request.getHeader("access-token")!=""){
            String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
            if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)) {
                logger.info("사용 가능한 토큰!!!");
                try {
                    studyFilterDto.setUserId(decodeUserId);
                    StudyInfoListDto result = studyService.getStudyByFilter(studyFilterDto);
                    if(result != null){
                        resultMap.put("message", "SUCCESS");
                        resultMap.put("data", result);
                        status = HttpStatus.ACCEPTED;
                    }else{
                        resultMap.put("message","FAIL");
                        status = HttpStatus.INTERNAL_SERVER_ERROR;
                    }
                } catch (Exception e) {
                    logger.error("예외 발생", e);
                    resultMap.put("message", "FAIL");
                    status = HttpStatus.INTERNAL_SERVER_ERROR;
                }
            }else{
                logger.error("사용 불가능 토큰!!!");
                resultMap.put("message",ACCESS_TOKEN_TIMEOUT);
                status = HttpStatus.UNAUTHORIZED;

            }
        }else{
            StudyInfoListDto result = studyService.getStudyByFilter(studyFilterDto);
            if(result != null){
                resultMap.put("message", "SUCCESS");
                resultMap.put("data", result);
                status = HttpStatus.ACCEPTED;
            }else{
                resultMap.put("message","FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }

        return new ResponseEntity<>(resultMap, status);
    }

    @GetMapping("/study/user")
    public ResponseEntity<Map<String, Object>> getStudyByUserId(@RequestParam int startItem, @RequestParam int itemCnt, HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status = null;
        logger.info("유저가 가입한 스터디조회 요청");

        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)){
            logger.info("사용 가능한 토큰!!!");
            try{
                StudyUserFilterDto studyUserFilterDto = new StudyUserFilterDto();
                studyUserFilterDto.setUserId(decodeUserId);
                studyUserFilterDto.setStartItem(startItem);
                studyUserFilterDto.setItemCnt(itemCnt);

                List<StudyInfoDto> result = studyService.getStudyByUserId(studyUserFilterDto);
                resultMap.put("message", "SUCCESS");
                resultMap.put("data", result);
                status = HttpStatus.ACCEPTED;

            }catch(Exception e){
                logger.error("예외 발생", e);
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!!");
            resultMap.put("message",ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @GetMapping("/study/item")
    public ResponseEntity<Map<String, Object>> getStudyByStudyId(@RequestParam int studyId){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status = null;
        logger.info("스터디 상세조회 요청 API");

        StudyDetailDto result = studyService.getStudyByStudyId(studyId);
        if(result != null){
            resultMap.put("message", "SUCCESS");
            resultMap.put("data", result);
            status = HttpStatus.ACCEPTED;
        }else{
            resultMap.put("message","FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);
    }


    @PostMapping("/study/like")
    public ResponseEntity<Map<String, Object>> likeStudy(@RequestParam int studyId, HttpServletRequest request){
        logger.info("스터디 좋아요 누르기 API 실행");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;

        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)){
            logger.info("사용 가능한 토큰!!!");
            try{
                StudyUserIdDto studyUserIdDto = new StudyUserIdDto();
                studyUserIdDto.setUserId(decodeUserId);
                studyUserIdDto.setStudyId(studyId);

                studyService.likeStudy(studyUserIdDto);
                resultMap.put("message","SUCCESS");
                status = HttpStatus.ACCEPTED;

            }catch(Exception e){
                logger.error("예외 발생", e);
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!!");
            resultMap.put("message",ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }


}
