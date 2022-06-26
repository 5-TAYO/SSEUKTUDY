package tayo.sseuktudy.service.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.member.MemberApplyDto;
import tayo.sseuktudy.dto.question.QuestionAnswerRegistDto;
import tayo.sseuktudy.dto.study.StudyJoinDto;
import tayo.sseuktudy.dto.study.StudyMemberDto;
import tayo.sseuktudy.mapper.MemberMapper;
import tayo.sseuktudy.mapper.QuestionMapper;

import java.util.List;
import java.util.Map;

@Service
public class MemberServiceImpl implements MemberService {

    private final MemberMapper memberMapper;
    private final QuestionMapper questionMapper;

    @Autowired
    public MemberServiceImpl(MemberMapper memberMapper, QuestionMapper questionMapper){
        this.memberMapper = memberMapper;
        this.questionMapper = questionMapper;
    }

    @Transactional
    @Override
    public int applyStudy(MemberApplyDto memberApplyDto){
        for(Map.Entry<String, String> entry : memberApplyDto.getPreQuestions().entrySet()){
            QuestionAnswerRegistDto questionAnswerRegistDto = new QuestionAnswerRegistDto();
            questionAnswerRegistDto.setQuestionId(Integer.parseInt(entry.getKey()));
            questionAnswerRegistDto.setQuestionAnswer(entry.getValue());
            questionAnswerRegistDto.setStudyId(memberApplyDto.getStudyId());
            questionAnswerRegistDto.setUserId(memberApplyDto.getUserId());

            if(questionMapper.registQuestionAnswer(questionAnswerRegistDto)==0){
                return 0;
            };
        }

        StudyJoinDto studyJoinDto = new StudyJoinDto();
        studyJoinDto.setStudyId(memberApplyDto.getStudyId());
        studyJoinDto.setUserId((memberApplyDto.getUserId()));
        studyJoinDto.setUserStatus("non member");
        return memberMapper.applyStudy(studyJoinDto);
    }

    @Override
    public List<StudyMemberDto> findMembers(MemberApplyDto memberApplyDto) {
        return  memberMapper.findMembers(memberApplyDto);
    }

    @Override
    public StudyMemberDto findOne(MemberApplyDto memberApplyDto) {
        return memberMapper.findOne(memberApplyDto);
    }

    @Override
    public int removeMember(MemberApplyDto memberApplyDto) {
        return memberMapper.removeMember(memberApplyDto);
    }
}
