package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.UserRegistDto;
import tayo.sseuktudy.mapper.UserMapper;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public String registUser(UserRegistDto request) throws Exception{
        System.out.println("service");
        System.out.println(request.toString());
        return " "+userMapper.registUser(request);
    }
}
