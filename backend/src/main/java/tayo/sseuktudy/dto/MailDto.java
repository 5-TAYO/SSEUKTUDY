package tayo.sseuktudy.dto;

public class MailDto {

    private String userId;
    private String authKey;
    public String getUserId() {
        return userId;
    }
    public void setUserId(String userId) {
        this.userId = userId;
    }
    public String getAuthKey() {
        return authKey;
    }
    public void setAuthKey(String authKey) {
        this.authKey = authKey;
    }
}
