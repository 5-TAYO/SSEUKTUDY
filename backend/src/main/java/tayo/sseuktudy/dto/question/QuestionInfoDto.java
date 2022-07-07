package tayo.sseuktudy.dto.question;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QuestionInfoDto {
    int questionId;
    int studyId;
    String questionContent;
}
