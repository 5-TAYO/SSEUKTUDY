package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.member.MemberApplyDto;
import tayo.sseuktudy.dto.study.StudyJoinDto;
import tayo.sseuktudy.dto.study.StudyMemberDto;

import java.util.List;

@Mapper
public interface MemberMapper {
    public int applyStudy(StudyJoinDto studyJoinDto);
    public List<StudyMemberDto> findMembers(MemberApplyDto studyMemberApplyDto);
    public StudyMemberDto findOne(MemberApplyDto studyMemberApplyDto);
    public int removeMember(MemberApplyDto studyMemberApplyDto);
}
