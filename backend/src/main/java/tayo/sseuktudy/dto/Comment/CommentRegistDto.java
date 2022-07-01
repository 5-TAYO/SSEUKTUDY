package tayo.sseuktudy.dto.Comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CommentRegistDto {
    String userId;
    int studyId;
    String commentDetail;
    int upCommentId;
}
