package tayo.sseuktudy.dto.Comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CommentModifyDto {
    int commentId;
    String userId;
    String commentDetail;
}
