package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class StudyMemberDto {
    String userId;
    String userNickname;
    String userIntroduce;
    List<String> questions;
    List<String> questionAnswers;
}
