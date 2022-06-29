package tayo.sseuktudy.dto.user;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserModifyDto {
    private String userId;
    private String userPw;
    private String userNickname;
    private int userAge;
    private String userAddress;
    private int[] userCategorys;

}
