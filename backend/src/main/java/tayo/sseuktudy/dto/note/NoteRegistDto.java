package tayo.sseuktudy.dto.note;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoteRegistDto {
    int noteId;
    String userIdSend;
    String userIdReceive;
    boolean noteIsRead;
    String noteSendTime;
    String noteContent;
}
