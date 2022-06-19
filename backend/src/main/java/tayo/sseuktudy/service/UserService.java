package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.UserInfoDto;
import tayo.sseuktudy.dto.UserLoginDto;
import tayo.sseuktudy.dto.UserRegistDto;

public interface UserService {

    String registUser(UserRegistDto request) throws Exception;
    String modifyUser(UserRegistDto request) throws Exception;
    String loginUser(UserLoginDto request) throws Exception;
    public UserInfoDto userInfo(String userid) throws Exception;
    public String getRefreshToken(String userid) throws Exception;
    public String deleRefreshToken(String userid) throws Exception;
    public String saveRefreshToken(String userid, String refreshToken) throws Exception;
    public int idcheck(String userid) throws Exception;
}
