package tayo.sseuktudy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.note.NoteInfoDto;
import tayo.sseuktudy.dto.note.NoteReadDto;
import tayo.sseuktudy.dto.note.NoteRegistDto;
import tayo.sseuktudy.service.NoteServiceImpl;
import tayo.sseuktudy.service.jwtServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class NoteController {
    private final NoteServiceImpl noteService;
    private final jwtServiceImpl jwtService;
    @Autowired
    NoteController(NoteServiceImpl noteService, jwtServiceImpl jwtService){
        this.noteService = noteService;
        this.jwtService = jwtService;
    }


    @PostMapping("/note")
    public ResponseEntity<Map<String, Object>> registNote(@RequestBody NoteRegistDto noteRegistDto, HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        int result = noteService.registNote(noteRegistDto);
        if(result != 0){
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }else{
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
    }
    @GetMapping ("/note/send")
    public ResponseEntity<Map<String, Object>> listSendNote(HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        try{
            resultMap.put("list",noteService.listSendNote(userId));
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }catch (Exception e){
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
    }

    @GetMapping ("/note/receive")
    public ResponseEntity<Map<String, Object>> listReciveNote(HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        try{
            System.out.println(userId);
            resultMap.put("list",noteService.listReciveNote(userId));
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }catch (Exception e){
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
    }
    @GetMapping ("/note/{noteId}")
    public ResponseEntity<Map<String, Object>> readNote(@PathVariable("noteId") int noteId, HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        if(userId.equals("access token timeout")){
            resultMap.put("message", "access token timeout");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }else{
            NoteReadDto noteReadDto = new NoteReadDto();
            noteReadDto.setNoteId(noteId);
            noteReadDto.setUserId(userId);
            int result = noteService.readNote(noteReadDto);
            if(result == 1){
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }else{
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
    }
    @DeleteMapping("/note/{noteId}")
    public ResponseEntity<Map<String, Object>> deleteNote(@PathVariable("noteId") int noteId, HttpServletRequest request){
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        if(userId.equals("access token timeout")){
            resultMap.put("message", "access token timeout");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }else{
            NoteReadDto noteReadDto = new NoteReadDto();
            noteReadDto.setNoteId(noteId);
            noteReadDto.setUserId(userId);
            int result = noteService.deleteNote(noteReadDto);
            if(result == 1){
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }else{
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
}
