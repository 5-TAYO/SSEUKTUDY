package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.question.QuestionAnswerRegistDto;
import tayo.sseuktudy.dto.question.QuestionModifyDto;
import tayo.sseuktudy.dto.question.QuestionRegistDto;

import java.util.Map;

@Mapper
public interface QuestionMapper {
    public int registQuestion(QuestionRegistDto questionDto);
    public int modifyQuestion(QuestionModifyDto questionModifyDto);
    public int registQuestionAnswer(QuestionAnswerRegistDto questionAnswerRegistDto);
}
