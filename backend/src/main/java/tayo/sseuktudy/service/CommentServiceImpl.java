package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;
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
    public List<CommentInfoDto> listComment(CommentInfoDto commentInfoDto){
        List<CommentInfoDto> listComment = commentMapper.listComment(commentInfoDto);
        List<CommentInfoDto> result = new ArrayList<>();
        for (int i = 0; i < listComment.size(); i++) {
            if(listComment.get(i).getUpCommentId() == 0){ //상위 댓글이 본인이라면
                result.add(listComment.get(i));
            }
            else{
                for(int j=0; j<result.size(); j++){
                    if(listComment.get(i).getUpCommentId() == result.get(j).getCommentId()){
                        List<CommentInfoDto> temp = new ArrayList<>();
                        if(result.get(j).getDownComment() != null) {
                            for (int k = 0; k < result.get(j).getDownComment().size(); k++) {
                                temp.add(result.get(j).getDownComment().get(k));
                            }
                        }
                        temp.add(listComment.get(i));
                        result.get(j).setDownComment(temp);
                        break;
                    }
                }
            }
        }
        return result;
    }
}
