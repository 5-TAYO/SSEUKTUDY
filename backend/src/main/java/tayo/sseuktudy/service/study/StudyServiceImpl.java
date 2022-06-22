package tayo.sseuktudy.service.study;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.question.QuestionDto;
import tayo.sseuktudy.dto.study.StudyRegistDto;
import tayo.sseuktudy.mapper.QuestionMapper;
import tayo.sseuktudy.mapper.StudyMapper;

import java.util.Optional;

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

        QuestionDto questionDto = new QuestionDto();

        questionDto.setStudyId(studyRegistDto.getStudyId());

        for(String question : studyRegistDto.getStudyPrequestion()){
            questionDto.setQuestionContent(question);
            if(questionMapper.registQuestion(questionDto) != 1){
                return 0;
            }
        }
        return 1;
    }
}
