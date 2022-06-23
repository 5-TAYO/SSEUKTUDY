package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.note.NoteRegistDto;

@Mapper
public interface NoteMapper {
    public int registNote(NoteRegistDto noteRegistDto);
}
