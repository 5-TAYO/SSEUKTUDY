package tayo.sseuktudy.dto.note;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NoteRegistStudyDto {
    String userIdSend;
    String userIdRecevie;
    int studyId;
    String noteContent;
//    String [] userIdRecevies;
}
