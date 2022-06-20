package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.UserInfoDto;
import tayo.sseuktudy.dto.UserLoginDto;
import tayo.sseuktudy.dto.UserModifyDto;
import tayo.sseuktudy.dto.UserRegistDto;

public interface UserService {

    String registUser(UserRegistDto request) throws Exception;
    String modifyUser(UserModifyDto userModifyDto) throws Exception;
    String loginUser(UserLoginDto request) throws Exception;
    public UserInfoDto userInfo(String userid) throws Exception;
    public String getRefreshToken(String userid) throws Exception;
    public String deleteRefreshToken(String userid) throws Exception;
    public String saveRefreshToken(String userid, String refreshToken) throws Exception;
    public int idcheck(String userid) throws Exception;
    String deleteUser(UserRegistDto request) throws Exception;

}
