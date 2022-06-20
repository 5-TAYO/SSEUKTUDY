package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.MailDto;
import tayo.sseuktudy.dto.UserRegistDto;

@Mapper
public interface UserMapper {

    int registUser(UserRegistDto request)throws Exception;
    int modifyUser(UserRegistDto request)throws Exception;
    int mailSend(MailDto mailDto)throws Exception;
}
