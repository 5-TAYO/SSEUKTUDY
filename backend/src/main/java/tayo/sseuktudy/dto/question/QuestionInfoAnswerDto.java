package tayo.sseuktudy.dto.question;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QuestionInfoAnswerDto {
    int studyId;
    int questionId;
    String questionContent;
    String questionAnswer;
}
