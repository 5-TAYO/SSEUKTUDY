package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.*;

import java.sql.SQLException;
import java.util.Map;

@Mapper
public interface MailMapper {

    int mailSend(MailDto mailDto)throws Exception;
    int mailCheck(MailDto mailDto)throws Exception;
    int mailDelete(MailDto mailDto) throws  Exception;


}
