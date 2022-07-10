package tayo.sseuktudy.dto.member;

import lombok.Getter;
import lombok.Setter;
import tayo.sseuktudy.dto.question.QuestionInfoAnswerDto;

import java.util.List;

@Getter
@Setter
public class MemberInfoListDto {
    MemberInfoDto memberInfoDto;
    List<QuestionInfoAnswerDto> questionInfoAnswerDtos;
}
