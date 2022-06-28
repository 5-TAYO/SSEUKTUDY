package tayo.sseuktudy.dto.user;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserModifyDto {
    private String userId;
    private String userPw;
    private String userNickname;
    private int userAge;
    private String userAddress;

}
