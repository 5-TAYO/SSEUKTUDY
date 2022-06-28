package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.user.*;

public interface UserService {

    int registUserMain(UserMainRegistDto userMainRegistDto) throws Exception;

    int modifyUser(UserModifyDto userModifyDto) throws Exception;
    int deleteUser(String userId) throws Exception;
    int loginUser(UserLoginDto request) throws Exception;
    UserInfoDto userInfo(String userid) throws Exception;
    String getRefreshToken(String userid) throws Exception;
    int deleteRefreshToken(String userid) throws Exception;
    int saveRefreshToken(String userid, String refreshToken) throws Exception;


}
