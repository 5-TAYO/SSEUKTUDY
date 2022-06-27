package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.user.UserInfoDto;
import tayo.sseuktudy.dto.user.UserLoginDto;
import tayo.sseuktudy.dto.user.UserModifyDto;
import tayo.sseuktudy.dto.user.UserRegistDto;
import tayo.sseuktudy.mapper.UserMapper;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    @Autowired
    public UserServiceImpl(UserMapper userMapper){
        this.userMapper = userMapper;
    }

    @Override
    public int registUser(UserRegistDto request) throws Exception{
        return userMapper.registUser(request);
    }
    @Override
    public int modifyUser(UserModifyDto userModifyDto) throws Exception{
        return userMapper.modifyUser(userModifyDto);
    }

    @Override
    public int deleteUser(String userId) throws Exception{
        return userMapper.deleteUser(userId);
    }
    @Override
    public int loginUser(UserLoginDto request) throws Exception {
       return userMapper.loginUser(request);
    }

    @Override
    public UserInfoDto userInfo(String userid) throws Exception {
        return userMapper.userInfo(userid);
    }

    @Override
    public String getRefreshToken(String userId) throws Exception {
        return userMapper.getRefreshToken(userId);
    }

    @Override
    public int saveRefreshToken(String userid, String refreshToken) throws Exception {
        Map<String, String> map = new HashMap<>();
        map.put("userId", userid);
        map.put("userRefreshToken", refreshToken);
        return userMapper.saveRefreshToken(map);
    }


    @Override
    public int deleteRefreshToken(String userid) throws Exception {
        Map<String, String> map = new HashMap<String, String>();
        map.put("userId", userid);
        map.put("userRefreshToken", null);

        return userMapper.deleteRefreshToken(map);

    }

}
