package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import tayo.sseuktudy.dto.MailDto;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.mapper.UserMapper;

import java.util.Random;


@Service
@AllArgsConstructor
public class MailService {

    @Autowired
    JavaMailSender javaMailSender;
    @Autowired
    private UserMapper userMapper;
    private static final String FROM_ADDRESS = "1552419@gmail.com";
    public static String []resultType = {"fail","success"};

    public String mailSend(MailDto mailDto) throws Exception {
        int result = 0;
        String authKey = makeAuthNumber();
        SimpleMailMessage message = new SimpleMailMessage();
        String subText = "회원 가입을 위한 인증번호 입니다. \n 인증번호 : "+ authKey;
        message.setTo(mailDto.getUserId());
        message.setFrom(MailService.FROM_ADDRESS);
        message.setSubject("[인증번호] SSEUKTUDY");
        message.setText(subText);

        try{
            javaMailSender.send(message); //메일 전송
            mailDto.setAuthKey(authKey);
            userMapper.mailDelete(mailDto);
            result = userMapper.mailSend(mailDto);
        }catch (Exception e){
            e.printStackTrace();
        }


        return resultType[result];
    }
    public String mailCheck(MailDto mailDto) throws Exception{
        int result = 0;
        result = userMapper.mailCheck(mailDto);
        return resultType[result];
    }
    public String makeAuthNumber(){
        Random random = new Random();
        String authKey = String.valueOf(random.nextInt(888888)+111111);
        return authKey;
    }

}