package tayo.sseuktudy.dto.question;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QuestionAnswerRegistDto {
    String userId;
    int studyId;
    int questionId;
    String questionAnswer;
}
