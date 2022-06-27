package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.member.MemberApplyDto;
import tayo.sseuktudy.dto.member.MemberJoinDto;
import tayo.sseuktudy.dto.member.MemberInfoDto;
import tayo.sseuktudy.dto.member.MemberStatusChangeDto;

import java.util.List;

@Mapper
public interface MemberMapper {
    public int applyStudy(MemberJoinDto memberJoinDto);
    public List<MemberInfoDto> getMembers(int studyId);
    public int acceptMember(MemberStatusChangeDto memberStatusChangeDto);
    public int refuseMember(MemberStatusChangeDto memberStatusChangeDto);

}
