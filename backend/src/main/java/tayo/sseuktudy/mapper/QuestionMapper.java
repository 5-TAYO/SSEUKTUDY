package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.question.*;
import tayo.sseuktudy.dto.study.StudyUserIdDto;

import java.util.List;
import java.util.Map;

@Mapper
public interface QuestionMapper {
    public int registQuestion(QuestionRegistDto questionDto);
    public int modifyQuestion(QuestionModifyDto questionModifyDto);
    public int registQuestionAnswer(QuestionAnswerRegistDto questionAnswerRegistDto);
    public List<QuestionInfoDto> getQuestionInfo(int studyId);
    public List<QuestionInfoAnswerDto> getQuestionInfoAnswer(StudyUserIdDto studyUserIdDto);
}
