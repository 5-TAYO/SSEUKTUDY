package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.Comment.CommentDeleteDto;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;
import tayo.sseuktudy.dto.Comment.CommentRegistDto;

import java.util.List;


public interface CommentService {
    int resgistComment(CommentRegistDto commentRegistDto);
    int deleteComment(CommentDeleteDto commentDeleteDto);

    List<CommentInfoDto> listComment(CommentInfoDto commandInfoDto);
}
