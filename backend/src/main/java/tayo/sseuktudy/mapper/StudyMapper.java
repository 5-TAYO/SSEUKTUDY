package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.member.MemberJoinDto;
import tayo.sseuktudy.dto.study.*;

@Mapper
public interface StudyMapper {

    public int registStudy(StudyRegistDto studyRegistDto);

    public int joinStudy(MemberJoinDto memberJoinDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyDeleteDto studyDeleteDto);

//    public StudyInfoDto getStudyInfo()

}
