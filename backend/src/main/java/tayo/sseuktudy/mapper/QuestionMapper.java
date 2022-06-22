package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.question.QuestionModifyDto;
import tayo.sseuktudy.dto.question.QuestionRegistDto;

@Mapper
public interface QuestionMapper {
    public int registQuestion(QuestionRegistDto questionDto);
    public int modifyQuestion(QuestionModifyDto questionModifyDto);
}
