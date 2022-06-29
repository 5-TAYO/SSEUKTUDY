package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.member.MemberJoinDto;
import tayo.sseuktudy.dto.study.*;

import java.util.List;

@Mapper
public interface StudyMapper {

    public int registStudy(StudyRegistDto studyRegistDto);

    public int joinStudy(MemberJoinDto memberJoinDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyDeleteDto studyDeleteDto);
    public List<StudyInfoDto> getStudyByFilter(StudyFilterDto studyFilterDto);
    public int likeStudy(StudyLikeDto studyLikeDto);
//    public StudyInfoDto getStudyInfo()

}
