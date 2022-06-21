package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.*;

import java.sql.SQLException;
import java.util.Map;

@Mapper
public interface UserMapper {

    int registUser(UserRegistDto request)throws Exception;
    int modifyUser(UserModifyDto userDeleteDto)throws Exception;

    int deleteUser(String userId)throws Exception;
    int searchUser(MailDto mailDto) throws Exception;
    UserLoginDto loginUser(UserLoginDto request) throws Exception;
    public UserInfoDto userInfo(String userId) throws SQLException;
    public int saveRefreshToken(Map<String, String> map) throws SQLException;
    public int deleteRefreshToken(Map<String, String> map) throws SQLException;
    public String getRefreshToken(String userId) throws SQLException;
    int idcheck(String userId) throws SQLException;



}
