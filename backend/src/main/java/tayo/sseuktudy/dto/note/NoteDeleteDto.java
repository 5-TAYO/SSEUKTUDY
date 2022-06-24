package tayo.sseuktudy.dto.note;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoteDeleteDto {
    String userId;
    int noteId;
}
