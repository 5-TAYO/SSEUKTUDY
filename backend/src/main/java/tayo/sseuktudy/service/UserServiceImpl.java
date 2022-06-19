package tayo.sseuktudy.service;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.UserLoginDto;
import tayo.sseuktudy.dto.UserRegistDto;
import tayo.sseuktudy.mapper.UserMapper;

import java.util.HashMap;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    public String []resultType = {"fail","success"};
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private SqlSession sqlSession;

    @Override
    public String registUser(UserRegistDto request) throws Exception{
        System.out.println("service");
        System.out.println(request.toString());
        return " "+userMapper.registUser(request);
    }
    @Override
    public String modifyUser(UserRegistDto request) throws Exception{
        int result = userMapper.modifyUser(request);
        return resultType[result];
    }

    @Override
    public String loginUser(UserLoginDto request) throws Exception {
        UserLoginDto result = userMapper.loginUser(request);
        if(result != null) return resultType[1];
        else return resultType[0];
    }

    @Override
    public String getRefreshToken(String userid) throws Exception {
        return sqlSession.getMapper(UserMapper.class).getRefreshToken(userid);
    }

    @Override
    public void saveRefreshToken(String userid, String refreshToken) throws Exception {
        Map<String, String> map = new HashMap<>();
        map.put("userid", userid);
        map.put("token", refreshToken);
        sqlSession.getMapper(UserMapper.class).saveRefreshToken(map);

    }

    @Override
    public int idcheck(String userid) throws Exception {
        return userMapper.idcheck(userid);
    }

    @Override
    public void deleRefreshToken(String userid) throws Exception {
        Map<String, String> map = new HashMap<String, String>();
        map.put("userid", userid);
        map.put("token", null);
        sqlSession.getMapper(UserMapper.class).deleteRefreshToken(map);

    }
}
