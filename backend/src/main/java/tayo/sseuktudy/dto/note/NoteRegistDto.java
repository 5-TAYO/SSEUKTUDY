package tayo.sseuktudy.dto.note;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoteRegistDto {
    String userIdSend;
    String userIdReceive;
    String noteContent;
}
