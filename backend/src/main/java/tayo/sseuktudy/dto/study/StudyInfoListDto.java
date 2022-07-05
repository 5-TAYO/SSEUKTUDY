package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class StudyInfoListDto {
    List<StudyInfoDto> studyInfoList;
    int studyCnt;
}
