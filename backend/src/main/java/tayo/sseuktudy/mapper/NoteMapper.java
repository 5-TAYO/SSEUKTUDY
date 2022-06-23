package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.note.NoteInfoDto;
import tayo.sseuktudy.dto.note.NoteRegistDto;

import java.util.List;

@Mapper
public interface NoteMapper {
    public int registNote(NoteRegistDto noteRegistDto);
    public List<NoteInfoDto> listSendNote(String userId);
    public List<NoteInfoDto> listReciveNote(String userId);
}
