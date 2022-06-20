package tayo.sseuktudy.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.*;
import tayo.sseuktudy.service.UserService;
import tayo.sseuktudy.service.jwtServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

import tayo.sseuktudy.dto.UserRegistDto;

import tayo.sseuktudy.service.UserService;
import tayo.sseuktudy.service.MailService;
@RestController
@CrossOrigin("*")
public class UserController {


    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private jwtServiceImpl jwtService;
    @Autowired
    private MailService mailService;

    @PostMapping("/regist")
    public String registUser(@RequestBody @Validated UserRegistDto request) throws Exception{
        String result = userService.registUser(request);
        return result;
    }
    @PutMapping("/user")
    public String modifyUser(@RequestBody @Validated UserModifyDto userModifyDto, HttpServletRequest request) throws Exception{
        String result = "fail";
        if(jwtService.checkToken(request.getHeader("access-token"))){
            result = userService.modifyUser(userModifyDto);
        }

        return result;
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody UserLoginDto request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        logger.info("로그인 요청");
        try {
            String loginUser = userService.loginUser(request);
            System.out.println(loginUser);
            if (loginUser.equals("success")) {
                String accessToken = jwtService.createAccessToken("user_id", request.getUserId());// key, data
                String refreshToken = jwtService.createRefreshToken("user_id", request.getUserId());
                if(userService.saveRefreshToken(request.getUserId(), refreshToken).equals("success")){
                    logger.info("refreshtoken 저장 완료");
                }else{
                    logger.info("refreshtoken 저장 실패");
                }

                logger.debug("access토큰정보 : {}", accessToken);
                logger.debug("refresh 토큰정보 : {}", refreshToken);
                resultMap.put("access-token", accessToken);
                resultMap.put("refresh-token", refreshToken);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;

            } else {
                resultMap.put("message", "FAIL");
                status = HttpStatus.ACCEPTED;
            }
        } catch (Exception e) {
            logger.error("로그인 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }

    @PutMapping("/logout/{userid}")
    public ResponseEntity<?> logoutUser(@PathVariable("userid") String userid){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.ACCEPTED;

        try {
            if(userService.deleteRefreshToken(userid).equals("success")){
                logger.info("refresh token 삭제 성공");
            }else{
                logger.info("refresh token 삭제 실패");
            }

            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        } catch (Exception e) {
            logger.error("로그아웃 실패 : {}", e);
            resultMap.put("message", e.getMessage());
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);

    }

    @GetMapping("/user/{userid}")
    public ResponseEntity<Map<String, Object>> getInfo(@PathVariable("userid") String userid,
                                                       HttpServletRequest request) {
//		logger.debug("userid : {} ", userid);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.UNAUTHORIZED;
        if (jwtService.checkToken(request.getHeader("access-token"))) {
            logger.info("사용 가능한 토큰!!!");
            try {
//				로그인 사용자 정보.
                UserInfoDto userInfoDto = userService.userInfo(userid);
                resultMap.put("userInfo", userInfoDto);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            } catch (Exception e) {
                logger.error("정보조회 실패 : {}", e);
                resultMap.put("message", e.getMessage());
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } else {
            logger.error("사용 불가능 토큰!!!");
            resultMap.put("message", "FAIL");
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }


    @DeleteMapping("user")
    public String deleteUser(@RequestBody @Validated UserRegistDto request) throws Exception{
        String result = userService.deleteUser(request);
        return result;
    }
// 인증번호 체크를 위한 곳
//    @GetMapping("/mail")
//    public String checkMail(@PathVariable("userid"){
//        return "mail";
//    }


    @PostMapping("/mail")
    public String execMail(@RequestBody @Validated MailDto request) throws Exception{
        return mailService.mailSend(request);
    }
}
