package tayo.sseuktudy.service.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.member.*;
import tayo.sseuktudy.dto.question.QuestionAnswerRegistDto;

import tayo.sseuktudy.dto.question.QuestionInfoAnswerDto;
import tayo.sseuktudy.dto.question.QuestionInfoDto;
import tayo.sseuktudy.dto.study.StudyUserIdDto;
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

        MemberJoinDto memberJoinDto = new MemberJoinDto();
        memberJoinDto.setStudyId(memberApplyDto.getStudyId());
        memberJoinDto.setUserId((memberApplyDto.getUserId()));
        memberJoinDto.setUserStatus("non member");
        memberJoinDto.setUserIntroduction(memberApplyDto.getUserIntroduction());
        memberJoinDto.setUserNickname(memberApplyDto.getUserNickname());
        return memberMapper.applyStudy(memberJoinDto);
    }

    @Override
    public List<QuestionInfoDto> getQuestionInfo(int studyId) {
        return questionMapper.getQuestionInfo(studyId);
    }

    @Transactional
    @Override
    public List<MemberInfoDto> getMembers(int studyId) {

        MemberInfoListDto memberInfoListDto = new MemberInfoListDto();
        List<MemberInfoDto> memberInfoDtos = memberMapper.getMembers(studyId);

        for(MemberInfoDto memberInfoDto : memberInfoDtos){
            String userId = memberInfoDto.getUserId();

            StudyUserIdDto studyUserIdDto = new StudyUserIdDto();
            studyUserIdDto.setUserId(userId);
            studyUserIdDto.setStudyId(studyId);

            List<QuestionInfoAnswerDto> questionInfoAnswerDtos = questionMapper.getQuestionInfoAnswer(studyUserIdDto);

            memberInfoDto.setQuestionInfoAnswerDtos(questionInfoAnswerDtos);
        }

        return  memberInfoDtos;
    }

    @Override
    public int acceptMember(MemberStatusChangeDto memberStatusChangeDto){
        return memberMapper.acceptMember(memberStatusChangeDto);
    }

    @Override
    public int refuseMember(MemberStatusChangeDto memberStatusChangeDto){
        return memberMapper.refuseMember(memberStatusChangeDto);

    }
}
