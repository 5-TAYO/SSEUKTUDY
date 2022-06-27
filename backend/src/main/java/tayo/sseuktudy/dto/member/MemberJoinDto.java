package tayo.sseuktudy.dto.member;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberJoinDto {
    String userId;
    int studyId;
    String userStatus;
    String userNickname;
    String userIntroduction;
}
