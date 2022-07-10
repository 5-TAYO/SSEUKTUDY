package tayo.sseuktudy.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MailDto {


    private String userId;
    private String authKey;
    public MailDto(String userId, String authKey) {
        this.userId = userId;
        this.authKey = authKey;
    }
    public MailDto(String userId) {
        this.userId = userId;
    }
}
