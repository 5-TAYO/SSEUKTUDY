package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.note.*;

import java.util.List;

@Mapper
public interface NoteMapper {
    public int registNote(NoteRegistDto noteRegistDto);
    public String[] getStudyUsers(int studyId);
    public List<NoteInfoDto> listSendNote(String userId);
    public List<NoteInfoDto> listReciveNote(String userId);
    public int readNote(NoteReadDto noteReadDto);
    public int deleteNote(NoteDeleteDto noteDeleteDto);
    public int checkCountNote(String userId);
}
