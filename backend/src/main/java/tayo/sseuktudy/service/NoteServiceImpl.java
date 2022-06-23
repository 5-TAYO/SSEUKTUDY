package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.note.NoteInfoDto;
import tayo.sseuktudy.dto.note.NoteRegistDto;
import tayo.sseuktudy.mapper.NoteMapper;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService{
    private final NoteMapper noteMapper;

    @Autowired
    public NoteServiceImpl(NoteMapper noteMapper){
        this.noteMapper = noteMapper;
    }

    @Override
    public int registNote(NoteRegistDto noteRegistDto){
        return noteMapper.registNote(noteRegistDto);
    }

    @Override
    public List<NoteInfoDto> listSendNote(String userId) {
        return noteMapper.listSendNote(userId);
    }

}
