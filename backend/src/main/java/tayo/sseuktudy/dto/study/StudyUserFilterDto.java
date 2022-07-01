package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudyUserFilterDto {
    String userId;
    int startItem;
    int itemCnt;
}
