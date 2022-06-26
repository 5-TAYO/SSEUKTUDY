package tayo.sseuktudy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.note.*;
import tayo.sseuktudy.mapper.NoteMapper;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService{
    private final NoteMapper noteMapper;

    @Autowired
    public NoteServiceImpl(NoteMapper noteMapper){
        this.noteMapper = noteMapper;
    }
//    int result = 0;
//    String []userReceives = noteRegistDto.getUserIdReceives();
//        for(int i =0;i<noteRegistDto.getSizeUserIdReceives();i++){
//        noteRegistDto.setUserIdReceive(userReceives[i]);
//        result = noteMapper.registNote(noteRegistDto);
//        System.out.println(userReceives[i]);
//    }
//        System.out.println(result);
//        return result;
    @Override
    public int registNote(NoteRegistDto noteRegistDto){
        return noteMapper.registNote(noteRegistDto);
    }
    @Override
    public int registStudyNote(NoteRegistDto noteRegistDto,int studyId){
        int result = 0;
        String[] studyUsers = noteMapper.getStudyUsers(studyId);
        try{
            for (String studyUser : studyUsers) {
                noteRegistDto.setUserIdReceive(studyUser);
                noteMapper.registNote(noteRegistDto);
            }
            result = 1;
        }catch (Exception e){
            result =0;
        }
        return result;
    }
    @Override
    public List<NoteInfoDto> listSendNote(String userId) {
        return noteMapper.listSendNote(userId);
    }
    @Override
    public List<NoteInfoDto> listReciveNote(String userId) {
        return noteMapper.listReciveNote(userId);
    }

    @Override
    public int readNote(NoteReadDto noteReadDto){return noteMapper.readNote(noteReadDto);    }

    @Override
    public int deleteSendNote(NoteDeleteDto noteDeleteDto){return noteMapper.deleteSendNote(noteDeleteDto);    }
    @Override
    public int deleteReceiveNote(NoteDeleteDto noteDeleteDto){return noteMapper.deleteReceiveNote(noteDeleteDto);    }
    @Override
    public int checkCountNote(String userId) {return noteMapper.checkCountNote(userId);}
}
