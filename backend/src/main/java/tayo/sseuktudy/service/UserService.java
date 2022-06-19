package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.UserLoginDto;
import tayo.sseuktudy.dto.UserRegistDto;

public interface UserService {

    String registUser(UserRegistDto request) throws Exception;
    String modifyUser(UserRegistDto request) throws Exception;
    String loginUser(UserLoginDto request) throws Exception;
}
