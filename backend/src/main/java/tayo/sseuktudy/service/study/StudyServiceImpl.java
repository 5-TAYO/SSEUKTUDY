package tayo.sseuktudy.service.study;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.member.MemberJoinDto;
import tayo.sseuktudy.dto.question.QuestionModifyDto;
import tayo.sseuktudy.dto.question.QuestionRegistDto;
import tayo.sseuktudy.dto.study.*;
import tayo.sseuktudy.mapper.QuestionMapper;
import tayo.sseuktudy.mapper.StudyMapper;

import java.util.List;

@Service
public class StudyServiceImpl implements StudyService{

    private final StudyMapper studyMapper;
    private final QuestionMapper questionMapper;

    @Autowired
    public StudyServiceImpl(StudyMapper studyMapper, QuestionMapper questionMapper){
        this.studyMapper = studyMapper;
        this.questionMapper = questionMapper;
    }


    @Transactional
    @Override
    public int registStudy(StudyRegistDto studyRegistDto) {
        if(studyMapper.registStudy(studyRegistDto) != 1){
            return 0;
        }

        QuestionRegistDto questionRegistDto = new QuestionRegistDto();

        questionRegistDto.setStudyId(studyRegistDto.getStudyId());

        for(String question : studyRegistDto.getStudyPrequestion()){
            questionRegistDto.setQuestionContent(question);
            if(questionMapper.registQuestion(questionRegistDto) != 1){
                return 0;
            }
        }

        MemberJoinDto memberJoinDto = new MemberJoinDto();

        memberJoinDto.setStudyId(studyRegistDto.getStudyId());
        memberJoinDto.setUserId(studyRegistDto.getStudyLeaderId());
        memberJoinDto.setUserStatus("member");

        if(studyMapper.joinStudy(memberJoinDto) != 1){
            return 0;
        }

        return 1;
    }

    @Transactional
    @Override
    public int modifyStudy(StudyModifyDto studyModifyDto){
        for(String question : studyModifyDto.getQuestions()){
            QuestionModifyDto questionModifyDto = new QuestionModifyDto();
            questionModifyDto.setQuestionId(Integer.parseInt(question.split(",")[0]));
            questionModifyDto.setQuestionContent(question.split(",")[1]);

            if(questionMapper.modifyQuestion(questionModifyDto) != 1){
                return 0;
            };
        }


        return studyMapper.modifyStudy(studyModifyDto);
    }

    @Override
    public int deleteStudy(StudyUserIdDto studyUserIdDto) {
        return studyMapper.deleteStudy(studyUserIdDto);
    }

    @Override
    public List<StudyInfoDto> getStudyByFilter(StudyFilterDto studyFilterDto) {
        return studyMapper.getStudyByFilter(studyFilterDto);
    }

    @Override
    public List<StudyInfoDto> getStudyByUserId(String userId){
        return studyMapper.getStudyByUserId(userId);
    }

    @Override
    public int likeStudy(StudyUserIdDto studyUserIdDto) {
        return studyMapper.likeStudy(studyUserIdDto);
    }

    @Override
    public int leaderCheck(StudyUserIdDto studyUserIdDto) {
        return studyMapper.leaderCheck(studyUserIdDto);
    }


}
