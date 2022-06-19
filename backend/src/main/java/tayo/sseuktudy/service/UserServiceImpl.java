package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.UserLoginDto;
import tayo.sseuktudy.dto.UserRegistDto;
import tayo.sseuktudy.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService {
    public String []resultType = {"fail","success"};
    @Autowired
    private UserMapper userMapper;

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
}
