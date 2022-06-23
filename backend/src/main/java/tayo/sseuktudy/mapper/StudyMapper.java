package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.study.*;

import java.util.Optional;

@Mapper
public interface StudyMapper {

    public int registStudy(StudyRegistDto studyRegistDto);

    public int joinStudy(StudyJoinDto studyJoinDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyDeleteDto studyDeleteDto);

//    public StudyInfoDto getStudyInfo()

}
