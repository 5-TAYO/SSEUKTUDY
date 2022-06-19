package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.UserRegistDto;
import tayo.sseuktudy.mapper.UserMapper;

@Service
@Transactional
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
    public String deleteUser(UserRegistDto request) throws Exception{
        System.out.println("서비스임플");
        int result = userMapper.deleteUser(request);
        return resultType[result];
    }
}
