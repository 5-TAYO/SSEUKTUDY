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

    @PostMapping("/user/login")
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

    @PutMapping("/user/logout/{userid}")
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
    @PostMapping("/user/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody @Validated String userId, HttpServletRequest request) throws Exception{
        System.out.println(userId);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = HttpStatus.ACCEPTED;
        String token = request.getHeader("refresh-token");
        System.out.println(token);
        jwtService.checkToken(token);

        System.out.println(userService.getRefreshToken((userId)));
        if(token.equals(userService.getRefreshToken(userId))) {

            String accessToken= jwtService.createAccessToken("userid", userId);
            resultMap.put("access-token", accessToken);
            System.out.println(accessToken);
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else {
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
    @GetMapping("/user/info/{userid}")
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
    ////////////////////////////////////////////////////////////
    // 회원가입 동작방식 : 이메일 유효한지 체크 -> 인증번호 발송 ->인증번호 체크 -> 회원가입
    ////////////////////////////////////////////////////////////
    @PostMapping("/user/regist")
    public String registUser(@RequestBody @Validated UserRegistDto request) throws Exception {
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

    @DeleteMapping("/user/{userId}")
    public String deleteUser(@PathVariable("userId") String userId, HttpServletRequest request) throws Exception{
        String result = "fail";
//        if(jwtService.checkToken(request.getHeader("access-token"))){
            result = userService.deleteUser(userId);
//        }
        return result;
    }
    @GetMapping("/email")
    public String mailCheck(@RequestParam(value = "userId")String userId, @RequestParam (value= "authKey") String authKey ) throws Exception {
        MailDto mailDto = new MailDto(userId, authKey);

        return mailService.mailCheck(mailDto);
    }


    @PostMapping("/email")
    public String mailSend(@RequestBody @Validated MailDto mailDto) throws Exception{
        return mailService.mailSend(mailDto);
    }
}
