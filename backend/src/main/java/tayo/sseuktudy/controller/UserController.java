package tayo.sseuktudy.controller;

import lombok.Getter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.*;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;
import tayo.sseuktudy.dto.user.*;
import tayo.sseuktudy.service.JwtService;
import tayo.sseuktudy.service.UserService;
import tayo.sseuktudy.service.JwtServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import tayo.sseuktudy.service.MailService;
import tayo.sseuktudy.service.member.MemberService;

@RestController
@CrossOrigin("*")
public class UserController {
    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;
    private final JwtService jwtService;
    private final MailService mailService;
    private final int SERVICE_RETURN_OKAY = 1;
    private final String ACCESS_TOKEN_TIMEOUT = "access token timeout";
    @Autowired
    UserController(JwtService jwtService, UserService userService, MailService mailService){
        this.userService = userService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    @PostMapping("/user/login")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody UserLoginDto userLoginDto) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        logger.info("로그인 요청");
        try {
            int result = userService.loginUser(userLoginDto);
            if (result == 1) {
                String accessToken = jwtService.createAccessToken("user_id", userLoginDto.getUserId());// key, data
                String refreshToken = jwtService.createRefreshToken("user_id", userLoginDto.getUserId());
                if(userService.saveRefreshToken(userLoginDto.getUserId(), refreshToken) == 1){
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
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap, status);
    }

    @PutMapping("/user/logout")
    public ResponseEntity<?> logoutUser(HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();
        String accessToken = request.getHeader("access-token");
        String decodeUserId = jwtService.decodeToken(accessToken);
        HttpStatus status;
        if(!decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)){
            try {
                if(userService.deleteRefreshToken(decodeUserId) == 1){
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
        }else{
            resultMap.put("message", ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }

        return new ResponseEntity<>(resultMap, status);

    }
    @PostMapping("/user/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody @Validated String userId, HttpServletRequest request) throws Exception{
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        String token = request.getHeader("refresh-token");

        if(token.equals(userService.getRefreshToken(userId))) {

            String accessToken= jwtService.createAccessToken("userid", userId);
            resultMap.put("access-token", accessToken);
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else {
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }
    @GetMapping("/user/info")
    @Transactional
    public ResponseEntity<Map<String, Object>> getInfo(HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if (! decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)) {
            logger.info("사용 가능한 토큰!!!");
            try {
//				로그인 사용자 정보.
                UserInfoDto userInfoDto = userService.userInfo(decodeUserId);
                List<UserCategoryDto> userCategoryDto = userService.getUserCategory(decodeUserId);
                resultMap.put("userCategory", userCategoryDto);

                resultMap.put("userInfo", userInfoDto);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            } catch (Exception e) {
                logger.error("정보조회 실패 : {}", e);
                    resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } else {
            logger.error("사용 불가능 토큰!!!");
            resultMap.put("message", ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(resultMap, status);
    }
    @PostMapping("/user/main")
    public ResponseEntity<?> registUserMain(@RequestBody @Validated UserMainRegistDto userMainRegistDto) throws Exception {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        if(userService.registUserMain(userMainRegistDto) == SERVICE_RETURN_OKAY){
            resultMap.put("message","SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else{
            resultMap.put("message","FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap,status);
    }

    @PatchMapping("/user")
    @Transactional
    public ResponseEntity<?> modifyUser(@RequestBody UserModifyDto userModifyDto, HttpServletRequest request) throws Exception{
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        if (! decodeUserId.equals(ACCESS_TOKEN_TIMEOUT)) {
            userModifyDto.setUserId(decodeUserId);
            try{
                userService.modifyUser(userModifyDto);
                userService.deleteUserCategory(decodeUserId);
                userService.insertUserCategory(userModifyDto) ;
                resultMap.put("message","SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message","FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            resultMap.put("message", ACCESS_TOKEN_TIMEOUT);
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap,status);

    }
    @GetMapping("/user/comment")
    public ResponseEntity<?> userCommnet(HttpServletRequest request) throws Exception{
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        String decodeUserId = jwtService.decodeToken(request.getHeader("access-token"));
        try{
            List<CommentInfoDto> commentInfos = userService.getUserCommnet(decodeUserId);
            resultMap.put("data",commentInfos);
            resultMap.put("message","SUCCESS");
            status = HttpStatus.ACCEPTED;
        }catch (Exception e) {
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap,status);
    }
    @DeleteMapping("/user/{userId}")
    public ResponseEntity<?> deleteUser(@PathVariable("userId") String userId, HttpServletRequest request) throws Exception{
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        if(userService.deleteUser(userId) == SERVICE_RETURN_OKAY){
            resultMap.put("message","SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else{
            resultMap.put("message","FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap,status);
    }
    @GetMapping("/email")
    public ResponseEntity<?> mailCheck(@RequestParam(value = "userId")String userId, @RequestParam (value= "authKey") String authKey ) throws Exception {
        MailDto mailDto = new MailDto(userId, authKey);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try{
            mailService.mailCheck(mailDto);
            resultMap.put("message","SUCCESS");
            status = HttpStatus.ACCEPTED;
        }catch (Exception e){
            resultMap.put("message","FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap,status);
    }

    @GetMapping("/emailCheck")
    public ResponseEntity<?> emailCheck(@RequestParam(value = "userId")String userId) throws Exception {
        MailDto mailDto = new MailDto(userId);
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        try{
            if(mailService.mailCheck(mailDto)==1){
                resultMap.put("message","JOINED");
            }else{
                resultMap.put("message","SUCCESS");
            }
            status = HttpStatus.ACCEPTED;
        }catch (Exception e){
            resultMap.put("message","FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap,status);

    }

    @PostMapping("/email")
    public ResponseEntity<?> mailSend(@RequestBody @Validated MailDto mailDto) throws Exception{
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status;
        if(mailService.mailSend(mailDto) == SERVICE_RETURN_OKAY){
            resultMap.put("message","SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else{
            resultMap.put("message","FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<>(resultMap,status);

    }
}
