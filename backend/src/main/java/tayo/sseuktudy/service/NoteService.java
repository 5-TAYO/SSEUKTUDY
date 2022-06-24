package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.note.NoteInfoDto;
import tayo.sseuktudy.dto.note.NoteReadDto;
import tayo.sseuktudy.dto.note.NoteRegistDto;

import java.util.List;

public interface NoteService {
    public int registNote(NoteRegistDto noteRegistDto);
    public List<NoteInfoDto> listSendNote(String userId);
    public List<NoteInfoDto> listReciveNote(String userId);
    public int readNote(NoteReadDto noteReadDto);
}
