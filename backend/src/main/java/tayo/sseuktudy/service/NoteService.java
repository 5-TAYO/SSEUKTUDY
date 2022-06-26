package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.note.*;

import java.util.List;

public interface NoteService {
    public int registNote(NoteRegistDto noteRegistDto);
    public int registStudyNote(NoteRegistDto noteRegistDto, int studyId);
    public List<NoteInfoDto> listSendNote(String userId);
    public List<NoteInfoDto> listReciveNote(String userId);
    public int readNote(NoteReadDto noteReadDto);
    public int deleteSendNote(NoteDeleteDto noteDeleteDto);
    public int deleteReceiveNote(NoteDeleteDto noteDeleteDto);
    public int checkCountNote(String userId);
}
