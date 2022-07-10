package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.MailDto;
import tayo.sseuktudy.dto.user.*;

import java.util.List;

public interface UserService {

    int registUserMain(UserMainRegistDto userMainRegistDto) throws Exception;
    int emailCheck(MailDto mailDto) throws Exception;
    int modifyUser(UserModifyDto userModifyDto) throws Exception;
    int deleteUserCategory(String userId) throws Exception;
    int insertUserCategory(UserModifyDto userModifyDto) throws Exception;
    List<UserCategoryDto> getUserCategory(String userId) throws Exception;
    int deleteUser(String userId) throws Exception;
    int loginUser(UserLoginDto request) throws Exception;
    UserInfoDto userInfo(String userid) throws Exception;
    String getRefreshToken(String userid) throws Exception;
    int deleteRefreshToken(String userid) throws Exception;
    int saveRefreshToken(String userid, String refreshToken) throws Exception;


}
