package tayo.sseuktudy.dto.Comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class CommentInfoDto {
    int studyId;
    int upCommentId;
    int commentId;
    String userId;
    String userNickname;
    String commentDetail;
    String registTime;
    String modifyTime;
    List<CommentInfoDto> downComment;
}
