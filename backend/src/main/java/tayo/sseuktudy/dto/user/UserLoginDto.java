package tayo.sseuktudy.dto.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserLoginDto {
    private String userId;
    private String userPw;

}
