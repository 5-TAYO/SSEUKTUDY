package tayo.sseuktudy.service.member;

import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.member.MemberApplyDto;
import tayo.sseuktudy.dto.member.MemberInfoDto;
import tayo.sseuktudy.dto.member.MemberStatusChangeDto;


import java.util.List;

@Service
public interface MemberService {
    public int applyStudy(MemberApplyDto studyMemberApplyDto);
    public List<MemberInfoDto> getMembers(int studyId);
    public int acceptMember(MemberStatusChangeDto memberStatusChangeDto);
    public int refuseMember(MemberStatusChangeDto memberStatusChangeDto);

}
