package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.Comment.CommentDeleteDto;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;
import tayo.sseuktudy.dto.Comment.CommentModifyDto;
import tayo.sseuktudy.dto.Comment.CommentRegistDto;
import tayo.sseuktudy.mapper.CommentMapper;
import tayo.sseuktudy.mapper.NoteMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    private final CommentMapper commentMapper;

    @Autowired
    public CommentServiceImpl(CommentMapper commentMapper){
        this.commentMapper = commentMapper;
    }

    @Override
    public int resgistComment(CommentRegistDto commentRegistDto){
        return commentMapper.registComment(commentRegistDto);
    }
    @Override
    public int modifyComment(CommentModifyDto commentModifyDto){
        return commentMapper.modifyComment(commentModifyDto);
    }
    @Override
    public int deleteComment(CommentDeleteDto commentDeleteDto){
        return commentMapper.deleteComment(commentDeleteDto);
    }
}
