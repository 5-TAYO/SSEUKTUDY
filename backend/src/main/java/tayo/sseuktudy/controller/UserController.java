package tayo.sseuktudy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.MailDto;
import tayo.sseuktudy.dto.UserRegistDto;

import tayo.sseuktudy.service.UserService;
import tayo.sseuktudy.service.MailService;
@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private MailService mailService;



    @PostMapping("/regist")
    public String registUser(@RequestBody @Validated UserRegistDto request) throws Exception{
        String result = userService.registUser(request);
        return result;
    }
    @PutMapping("user")
    public String modifyUser(@RequestBody @Validated UserRegistDto request) throws Exception{
        String result = userService.modifyUser(request);
        return result;
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
