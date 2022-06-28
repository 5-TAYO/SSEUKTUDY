package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class StudyFilterDto {
    String studyType;
    int studyCategoryId;
    String studyStartdate;
    String studyEnddate;
}
