package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.UserLoginDto;
import tayo.sseuktudy.dto.UserRegistDto;

import java.sql.SQLException;
import java.util.Map;

@Mapper
public interface UserMapper {

    int registUser(UserRegistDto request)throws Exception;
    int modifyUser(UserRegistDto request)throws Exception;
    UserLoginDto loginUser(UserLoginDto request) throws Exception;
    public int saveRefreshToken(Map<String, String> map) throws SQLException;
    public int deleteRefreshToken(Map<String, String> map) throws SQLException;
    public String getRefreshToken(String userid) throws SQLException;
    int idcheck(String userid) throws SQLException;
}
