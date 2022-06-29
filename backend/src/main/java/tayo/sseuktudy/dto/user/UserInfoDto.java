package tayo.sseuktudy.dto.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserInfoDto {
    String userId;
    String userPw;
    int userAge;
    String userAddress;
    String userSocial;
    String userNickname;


}
