package tayo.sseuktudy.dto;

public class UserRegistDto {
    private String userId;
    private String userPw;
    private String userNickname;
    private int userAge;
    private String userAddress;
    private String userSocial;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserPw() {
        return userPw;
    }

    public void setUserPw(String userPw) {
        this.userPw = userPw;
    }

    public String getUserNickname() {
        return userNickname;
    }

    public void setUserNickname(String userNickname) {
        this.userNickname = userNickname;
    }

    public int getUserAge() {
        return userAge;
    }

    public void setUserAge(int userAge) {
        this.userAge = userAge;
    }

    public String getUserAddress() {
        return userAddress;
    }

    public void setUserAddress(String userAddress) {
        this.userAddress = userAddress;
    }

    public String getUserSocial() {
        return userSocial;
    }

    public void setUserSocial(String userSocial) {
        this.userSocial = userSocial;
    }

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
