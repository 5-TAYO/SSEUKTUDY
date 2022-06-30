package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.Comment.CommentInfoDto;
import tayo.sseuktudy.dto.Comment.CommentRegistDto;

import java.util.List;


public interface CommentService {
    int resgistComment(CommentRegistDto commentRegistDto);

    List<CommentInfoDto> listComment(CommentInfoDto commandInfoDto);
}
