package tayo.sseuktudy.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.*;
import tayo.sseuktudy.mapper.UserMapper;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    public String []resultType = {"fail","success"};
    @Autowired
    private UserMapper userMapper;

    @Override
    public String registUser(UserRegistDto request) throws Exception{
        int result = userMapper.registUser(request);
        return resultType[result];
    }
    @Override
    public String modifyUser(UserModifyDto userModifyDto) throws Exception{
        int result = userMapper.modifyUser(userModifyDto);
        return resultType[result];
    }

    @Override
    public String deleteUser(UserDeleteDto userDeleteDto) throws Exception{
        int result = userMapper.deleteUser(userDeleteDto);
        return resultType[result];
    }
    @Override
    public String loginUser(UserLoginDto request) throws Exception {
        UserLoginDto result = userMapper.loginUser(request);
        if(result != null) return resultType[1];
        else return resultType[0];
    }

    @Override
    public UserInfoDto userInfo(String userid) throws Exception {
        return userMapper.userInfo(userid);
    }

    @Override
    public String getRefreshToken(String userId) throws Exception {
        System.out.println("getRfT : " + userId);
        System.out.println("userMapper"+ userMapper.getRefreshToken(userId));
        return userMapper.getRefreshToken(userId);
    }

    @Override
    public String saveRefreshToken(String userid, String refreshToken) throws Exception {
        Map<String, String> map = new HashMap<>();
        map.put("userId", userid);
        map.put("userRefreshToken", refreshToken);
        int result =  userMapper.saveRefreshToken(map);
        return resultType[result];

    }

    @Override
    public int idcheck(String userid) throws Exception {
        return userMapper.idcheck(userid);
    }

    @Override
    public String deleteRefreshToken(String userid) throws Exception {
        Map<String, String> map = new HashMap<String, String>();
        map.put("userId", userid);
        map.put("userRefreshToken", null);
        int result = userMapper.deleteRefreshToken(map);

        return resultType[result];

    }

}
