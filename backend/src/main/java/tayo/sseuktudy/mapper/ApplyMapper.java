package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.apply.ApplyDto;
import tayo.sseuktudy.dto.study.StudyJoinDto;
import tayo.sseuktudy.dto.study.StudyMemberDto;

import java.util.List;

@Mapper
public interface ApplyMapper {
    public int applyStudy(StudyJoinDto studyJoinDto);
    public List<StudyMemberDto> findMembers(ApplyDto studyApplyDto);
    public StudyMemberDto findOne(ApplyDto studyApplyDto);
    public int removeMember(ApplyDto studyApplyDto);
}
