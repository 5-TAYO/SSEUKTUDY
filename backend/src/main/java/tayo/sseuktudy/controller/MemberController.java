package tayo.sseuktudy.controller;

import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.member.MemberApplyDto;
import tayo.sseuktudy.dto.member.MemberInfoDto;
import tayo.sseuktudy.dto.member.MemberJoinDto;
import tayo.sseuktudy.dto.member.MemberStatusChangeDto;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tayo.sseuktudy.service.JwtService;
import tayo.sseuktudy.service.member.MemberService;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class MemberController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);
    private final JwtService jwtService;
    private final MemberService memberService;

    @Autowired
    MemberController(JwtService jwtService, MemberService memberService){
        this.jwtService = jwtService;
        this.memberService = memberService;
    }

    @PostMapping("/member/apply")
    public ResponseEntity<Map<String, Object>> applyStudy(@RequestBody MemberApplyDto memberApplyDto, HttpServletRequest request){
        logger.info("스터디 신청 API 실행");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if(!decodeUserId.equals("access token timeout")){
            logger.info("사용 가능한 토큰!!");
            try{
                memberApplyDto.setUserId(decodeUserId);

                int result = memberService.applyStudy(memberApplyDto);

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

    @GetMapping("/member/list")
    public ResponseEntity<Map<String, Object>> getMembers(@RequestParam int studyId, HttpServletRequest request){
        logger.info("스터디 멤버 전체조회 API 실행");
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));

        if(!decodeUserId.equals("access token timeout")){
            logger.info("사용 가능한 토큰!!");
            try{
                List<MemberInfoDto> result = memberService.getMembers(studyId);

                if(result != null){
                    resultMap.put("message", "SUCCESS");
                    resultMap.put("data", result);
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

    @PatchMapping("/member/accept")
    public ResponseEntity<Map<String, Object>> acceptMember(@RequestBody MemberStatusChangeDto memberStatusChangeDto, HttpServletRequest request){
        logger.info("스터디 멤버수락 API 실행");
        Map<String, Object> resultMap  = new HashMap<>();
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));

        if(!decodeUserId.equals("access token timeout")){
            logger.info("사용 가능한 토큰!!");
            try{
                memberStatusChangeDto.setLeaderId(decodeUserId);

                int result = memberService.acceptMember(memberStatusChangeDto);

                if(result != 0){
                    resultMap.put("message", "SUCCESS");
                    status = HttpStatus.ACCEPTED;
                }else{
                    resultMap.put("message","FAIL");
                    status = HttpStatus.INTERNAL_SERVER_ERROR;
                }
            }catch(Exception e){
                logger.error("예외 발생");
                resultMap.put("message","FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!");
            resultMap.put("message", "FAIL");
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap,status);

    }

    @DeleteMapping("/member/refuse")
    public ResponseEntity<Map<String, Object>> refuseMember(@RequestBody MemberStatusChangeDto memberStatusChangeDto, HttpServletRequest request){
        logger.info("스터디 멤버거절 API 실행");
        Map<String, Object> resultMap  = new HashMap<>();
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));

        if(!decodeUserId.equals("access token timeout")){
            logger.info("사용 가능한 토큰!!");
            try{
                memberStatusChangeDto.setLeaderId(decodeUserId);

                int result = memberService.refuseMember(memberStatusChangeDto);

                if(result != 0){
                    resultMap.put("message", "SUCCESS");
                    status = HttpStatus.ACCEPTED;
                }else{
                    resultMap.put("message","FAIL");
                    status = HttpStatus.INTERNAL_SERVER_ERROR;
                }
            }catch(Exception e){
                logger.error("예외 발생");
                resultMap.put("message","FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            logger.error("사용 불가능 토큰!!");
            resultMap.put("message", "FAIL");
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap,status);

    }
}
