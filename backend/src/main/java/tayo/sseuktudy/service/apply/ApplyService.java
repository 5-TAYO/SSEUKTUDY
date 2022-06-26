package tayo.sseuktudy.service.apply;

import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.apply.ApplyDto;
import tayo.sseuktudy.dto.study.StudyMemberDto;

import java.util.List;

@Service
public interface ApplyService {
    public int applyStudy(ApplyDto studyApplyDto);
    public List<StudyMemberDto> findMembers(ApplyDto studyApplyDto);
    public StudyMemberDto findOne(ApplyDto studyApplyDto);
    public int removeMember(ApplyDto studyApplyDto);
}
