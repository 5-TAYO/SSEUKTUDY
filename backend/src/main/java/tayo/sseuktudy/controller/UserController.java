package tayo.sseuktudy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.UserRegistDto;
import tayo.sseuktudy.service.UserService;

@RestController
@CrossOrigin("*")
public class UserController {

    @Autowired
    private UserService userService;

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
}
