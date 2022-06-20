package tayo.sseuktudy.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegistDto {
    private String userId;
    private String userPw;
    private String userNickname;
    private int userAge;
    private String userAddress;
    private String userSocial;

    private String userRefreshToken;

    @Override
    public String toString() {
        return "UserRegistDto{" +
                "userId='" + userId + '\'' +
                ", userPw='" + userPw + '\'' +
                ", userNickname='" + userNickname + '\'' +
                ", userAge=" + userAge +
                ", userAddress='" + userAddress + '\'' +
                ", userSocial='" + userSocial + '\'' +
                '}';
    }
}
