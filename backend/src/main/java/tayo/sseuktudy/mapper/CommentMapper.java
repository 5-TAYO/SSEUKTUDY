package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.Comment.CommentDeleteDto;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;
import tayo.sseuktudy.dto.Comment.CommentRegistDto;

import java.util.List;

@Mapper
public interface CommentMapper {
    int registComment(CommentRegistDto commentRegistDto);
    int deleteComment(CommentDeleteDto commentDeleteDto);
    List<CommentInfoDto> listComment(CommentInfoDto commentInfoDto);
}
