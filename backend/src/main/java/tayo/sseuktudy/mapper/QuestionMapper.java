package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.question.QuestionDto;

@Mapper
public interface QuestionMapper {
    public int registQuestion(QuestionDto questionDto);
}
