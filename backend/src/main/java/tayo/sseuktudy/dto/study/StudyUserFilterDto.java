package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class StudyUserFilterDto {
    boolean isJoin;
    String userId;
    int startItem;
    int itemCnt;
}
