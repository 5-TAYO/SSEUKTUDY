package tayo.sseuktudy.dto;

public class UserLoginDto {
    private String user_id;
    private String user_pw;

    public String getUserId() {
        return user_id;
    }

    public void setUserId(String user_id) {
        this.user_id = user_id;
    }

    public String getUserPw() {
        return user_pw;
    }

    public void setUserPw(String user_pw) {
        this.user_pw = user_pw;
    }

    @Override
    public String toString() {
        return "UserLoginDto{" +
                "userId='" + user_id + '\'' +
                ", userPw='" + user_pw + '\'' +
                '}';
    }
}
