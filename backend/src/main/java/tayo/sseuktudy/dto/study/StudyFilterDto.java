package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class StudyFilterDto {
    String studyType;
    List<Integer> studyCategoryId;
    String studyStartdate;
    String studyEnddate;
    String studyTitle;
    String orderType;
    int startItem;
    int itemCnt;
    String userId;
}
