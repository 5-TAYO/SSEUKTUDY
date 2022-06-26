package tayo.sseuktudy.service.member;

import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.member.MemberApplyDto;
import tayo.sseuktudy.dto.study.StudyMemberDto;

import java.util.List;

@Service
public interface MemberService {
    public int applyStudy(MemberApplyDto studyMemberApplyDto);
    public List<StudyMemberDto> findMembers(MemberApplyDto studyMemberApplyDto);
    public StudyMemberDto findOne(MemberApplyDto studyMemberApplyDto);
    public int removeMember(MemberApplyDto studyMemberApplyDto);
}
