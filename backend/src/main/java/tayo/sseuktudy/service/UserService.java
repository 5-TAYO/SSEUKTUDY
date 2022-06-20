package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.*;

public interface UserService {

    String registUser(UserRegistDto request) throws Exception;
    String modifyUser(UserModifyDto userModifyDto) throws Exception;
    String deleteUser(UserDeleteDto userDeleteDto) throws Exception;
    String loginUser(UserLoginDto request) throws Exception;
    public UserInfoDto userInfo(String userid) throws Exception;
    public String getRefreshToken(String userid) throws Exception;
    public String deleteRefreshToken(String userid) throws Exception;
    public String saveRefreshToken(String userid, String refreshToken) throws Exception;
    public int idcheck(String userid) throws Exception;


}
