package tayo.sseuktudy.service.apply;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.apply.ApplyDto;
import tayo.sseuktudy.dto.question.QuestionAnswerRegistDto;
import tayo.sseuktudy.dto.study.StudyJoinDto;
import tayo.sseuktudy.dto.study.StudyMemberDto;
import tayo.sseuktudy.mapper.ApplyMapper;
import tayo.sseuktudy.mapper.QuestionMapper;

import javax.swing.text.html.parser.Entity;
import java.util.List;
import java.util.Map;

@Service
public class ApplyServiceImpl implements ApplyService{

    private final ApplyMapper applyMapper;
    private final QuestionMapper questionMapper;

    @Autowired
    public ApplyServiceImpl(ApplyMapper applyMapper, QuestionMapper questionMapper){
        this.applyMapper = applyMapper;
        this.questionMapper = questionMapper;
    }

    @Transactional
    @Override
    public int applyStudy(ApplyDto applyDto){
        for(Map.Entry<String, String> entry : applyDto.getPreQuestions().entrySet()){
            QuestionAnswerRegistDto questionAnswerRegistDto = new QuestionAnswerRegistDto();
            questionAnswerRegistDto.setQuestionId(Integer.parseInt(entry.getKey()));
            questionAnswerRegistDto.setQuestionAnswer(entry.getValue());
            questionAnswerRegistDto.setStudyId(applyDto.getStudyId());
            questionAnswerRegistDto.setUserId(applyDto.getUserId());

            if(questionMapper.registQuestionAnswer(questionAnswerRegistDto)==0){
                return 0;
            };
        }

        StudyJoinDto studyJoinDto = new StudyJoinDto();
        studyJoinDto.setStudyId(applyDto.getStudyId());
        studyJoinDto.setUserId((applyDto.getUserId()));
        studyJoinDto.setUserStatus("non member");
        return applyMapper.applyStudy(studyJoinDto);
    }

    @Override
    public List<StudyMemberDto> findMembers(ApplyDto applyDto) {
        return  applyMapper.findMembers(applyDto);
    }

    @Override
    public StudyMemberDto findOne(ApplyDto applyDto) {
        return applyMapper.findOne(applyDto);
    }

    @Override
    public int removeMember(ApplyDto applyDto) {
        return applyMapper.removeMember(applyDto);
    }
}
