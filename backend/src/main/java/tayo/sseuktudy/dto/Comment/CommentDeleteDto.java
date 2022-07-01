package tayo.sseuktudy.dto.Comment;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class CommentDeleteDto {
    int commentId;
    String userId;
}
