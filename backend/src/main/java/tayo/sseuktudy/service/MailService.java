package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import tayo.sseuktudy.dto.MailDto;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.mapper.UserMapper;
import tayo.sseuktudy.mapper.MailMapper;

import java.util.Random;


@Service
@AllArgsConstructor
public class MailService {

    @Autowired
    JavaMailSender javaMailSender;
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private MailMapper mailMapper;
    private static final String FROM_ADDRESS = "1552419@gmail.com";

    public int mailSend(MailDto mailDto) throws Exception {
        int result = 0;
        if(userMapper.searchUser(mailDto) == 0){ //유저 정보가 존재하지 않다면 메일 발송
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
                mailMapper.mailDelete(mailDto);
                result = mailMapper.mailSend(mailDto);
            }catch (Exception e){
                e.printStackTrace();
            }
        }else{
            result = 2;
        }
        return result;
    }
    public int mailCheck(MailDto mailDto) throws Exception{
        return mailMapper.mailCheck(mailDto);
    }
    public String makeAuthNumber(){
        Random random = new Random();
        String authKey = String.valueOf(random.nextInt(888888)+111111);
        return authKey;
    }

}