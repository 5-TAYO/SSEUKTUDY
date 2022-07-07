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
    public int deleteStudy(StudyUserIdDto studyUserIdDto);
    public List<StudyInfoDto> getStudyByFilter(StudyFilterDto studyFilterDto);
    public List<StudyInfoDto> getStudyByUserId(StudyUserFilterDto studyUserFilterDto);
    public int getStudyCntByFilter(StudyFilterDto studyFilterDto);
    public StudyInfoDto getStudyByStudyId(int studyId);
    public int likeStudy(StudyUserIdDto studyUserIdDto);
    public List<Integer> getLikeStudyIdByUserId(String userId);
    public int leaderCheck(StudyUserIdDto studyUserIdDto);

}
