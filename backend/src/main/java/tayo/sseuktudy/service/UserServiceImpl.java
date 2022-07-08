package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.user.*;
import tayo.sseuktudy.mapper.UserMapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements UserService {
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public UserServiceImpl(UserMapper userMapper, PasswordEncoder passwordEncoder){
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public int registUserMain(UserMainRegistDto userMainRegistDto) throws Exception{
        String password = passwordEncoder.encode(userMainRegistDto.getUserPw());
        userMainRegistDto.setUserPw(password);
        return userMapper.registUserMain(userMainRegistDto);
    }
    @Override
    public int modifyUser(UserModifyDto userModifyDto) throws Exception{
        return userMapper.modifyUser(userModifyDto);
    }
    @Override
    public int deleteUserCategory(String userId) throws Exception{
        return userMapper.deleteUserCategory(userId);
    }
    @Override
    public int insertUserCategory(UserModifyDto userModifyDto) throws Exception{
        return userMapper.insertUserCategory(userModifyDto);
    }
    @Override
    public List<UserCategoryDto> getUserCategory(String userId) throws Exception{
        return userMapper.getUserCategory(userId);

    }
    @Override
    public int deleteUser(String userId) throws Exception{
        return userMapper.deleteUser(userId);
    }
    @Override
    public int loginUser(UserLoginDto request) throws Exception {
        Boolean password = passwordEncoder.matches(request.getUserPw(),userMapper.loginUser(request));
        System.out.println(password);
        if(password == true) {
            return 1;
        }else{
            return 0;
        }
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
