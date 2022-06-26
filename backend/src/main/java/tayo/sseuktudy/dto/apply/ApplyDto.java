package tayo.sseuktudy.dto.apply;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.Map;

@Getter
@Setter
@ToString
public class ApplyDto {
    int studyId;
    String userId;
    String userStatus;
    String userNickname;
    String userIntroduce;
    Map<String, String> preQuestions;
}
