package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.*;
import tayo.sseuktudy.dto.user.*;

import java.sql.SQLException;
import java.util.Map;

@Mapper
public interface UserMapper {

    int registUserMain(UserMainRegistDto userMainRegistDto)throws Exception;

    int modifyUser(UserModifyDto userDeleteDto)throws Exception;

    int deleteUser(String userId)throws Exception;
    int searchUser(MailDto mailDto) throws Exception;
    int loginUser(UserLoginDto request) throws Exception;
    UserInfoDto userInfo(String userId) throws SQLException;
    int saveRefreshToken(Map<String, String> map) throws SQLException;
    int deleteRefreshToken(Map<String, String> map) throws SQLException;
    String getRefreshToken(String userId) throws SQLException;



}
