package tayo.sseuktudy.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.UserLoginDto;
import tayo.sseuktudy.dto.UserRegistDto;
import tayo.sseuktudy.service.UserService;
import tayo.sseuktudy.service.jwtServiceImpl;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class UserController {


    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private jwtServiceImpl jwtService;

    @PostMapping("/regist")
    public String registUser(@RequestBody @Validated UserRegistDto request) throws Exception{
        System.out.println("야호");
        System.out.println(request.toString());
        String result = userService.registUser(request);

        System.out.println(result);

        return result;
    }
    @PutMapping("/user")
    public String modifyUser(@RequestBody @Validated UserRegistDto request) throws Exception{
        String result = userService.modifyUser(request);

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
                String accessToken = jwtService.createAccessToken("userid", request.getUserId());// key, data
                String refreshToken = jwtService.createRefreshToken("userid", request.getUserId());
                userService.saveRefreshToken(request.getUserId(), refreshToken);
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
}
