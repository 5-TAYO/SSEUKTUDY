package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;

import java.util.List;

@Getter
@Setter
public class StudyDetailDto {
    StudyInfoDto studyInfoDto;
    List<CommentInfoDto> commentInfoList;
}
