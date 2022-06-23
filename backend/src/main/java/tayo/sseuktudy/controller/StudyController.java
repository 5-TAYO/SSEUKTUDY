package tayo.sseuktudy.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.study.StudyDeleteDto;
import tayo.sseuktudy.dto.study.StudyModifyDto;
import tayo.sseuktudy.dto.study.StudyRegistDto;
import tayo.sseuktudy.service.study.StudyService;
import tayo.sseuktudy.service.study.StudyServiceImpl;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class StudyController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final StudyServiceImpl studyService;

    @Autowired
    StudyController(StudyServiceImpl studyService){
        this.studyService = studyService;
    }

    @PostMapping("/study/regist")
    public ResponseEntity<Map<String, Object>> registStudy(@RequestBody StudyRegistDto studyRegistDto){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status = null;
        logger.info("스터디 등록 요청");

        int result = studyService.registStudy(studyRegistDto); // 스터디 테이블에 집어넣기
        // 사전질문 테이블에도 집어넣는 서비스 필요

        if(result != 0){
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else{
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @PutMapping("/study")
    public ResponseEntity<Map<String, Object>> modifyStudy(@RequestBody StudyModifyDto studyModifyDto){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status = null;
        logger.info("스터디 수정 요청");

        int result = studyService.modifyStudy(studyModifyDto); // 스터디 테이블에 집어넣기

        if(result != 0){
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else{
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;

        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @DeleteMapping("/study")
    public ResponseEntity<Map<String, Object>> deleteStudy(@RequestBody StudyDeleteDto studyDeleteDto){
        Map<String, Object> resultMap = new HashMap<>();

        HttpStatus status = null;
        logger.info("스터디 삭제 요청");

        int result = studyService.deleteStudy(studyDeleteDto);

        if(result != 0){
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;

        }else{
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}
