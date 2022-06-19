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
        System.out.println("야호");
        System.out.println(request.toString());
        String result = userService.registUser(request);

        System.out.println(result);

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
