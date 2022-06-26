package tayo.sseuktudy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.note.*;
import tayo.sseuktudy.service.NoteServiceImpl;
import tayo.sseuktudy.service.JwtServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class NoteController {
    private final NoteServiceImpl noteService;
    private final JwtServiceImpl jwtService;
    @Autowired
    NoteController(NoteServiceImpl noteService, JwtServiceImpl jwtService){
        this.noteService = noteService;
        this.jwtService = jwtService;
    }


    @PostMapping("/note")
    public ResponseEntity<Map<String, Object>> registNote(@RequestBody NoteRegistDto noteRegistDto, HttpServletRequest request){

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        if(!userId.equals("access token timeout")){
            try{
                noteRegistDto.setUserIdSend(userId);
                int result = noteService.registNote(noteRegistDto);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        else{
            resultMap.put("message", "access token timeout");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
    }
    @PostMapping("/note/{studyId}")
    public ResponseEntity<Map<String, Object>> registStudyNote(@RequestBody NoteRegistDto noteRegistDto, @PathVariable("studyId") int studyId, HttpServletRequest request){

        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        if(!userId.equals("access token timeout")){
            try{
                int result = noteService.registStudyNote(noteRegistDto, studyId);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        else{
            resultMap.put("message", "access token timeout");
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
        if(!userId.equals("access token timeout")){
            try{
                resultMap.put("list",noteService.listSendNote(userId));
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }
        else{
            resultMap.put("message", "access token timeout");
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
        if(!userId.equals("access token timeout")){
            try{
                resultMap.put("list",noteService.listReciveNote(userId));
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            resultMap.put("message", "access token timeout");
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
        if(!userId.equals("access token timeout")){
            try{
                NoteReadDto noteReadDto = new NoteReadDto();
                noteReadDto.setNoteId(noteId);
                noteReadDto.setUserId(userId);
                int result = noteService.readNote(noteReadDto);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        }else{
            resultMap.put("message", "access token timeout");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
    }
    @DeleteMapping("/note/receive/{noteId}")
    public ResponseEntity<Map<String, Object>> deleteReceiveNote(@PathVariable("noteId") int noteId, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        if (!userId.equals("access token timeout")) {
            try{
                NoteDeleteDto noteDeleteDto = new NoteDeleteDto();
                noteDeleteDto.setNoteId(noteId);
                noteDeleteDto.setUserId(userId);
                 noteService.deleteReceiveNote(noteDeleteDto);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } else {
            resultMap.put("message", "access token timeout");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
    @DeleteMapping("/note/send/{noteId}")
    public ResponseEntity<Map<String, Object>> deleteSendNote(@PathVariable("noteId") int noteId, HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        if (!userId.equals("access token timeout")) {
            try{
                NoteDeleteDto noteDeleteDto = new NoteDeleteDto();
                noteDeleteDto.setNoteId(noteId);
                noteDeleteDto.setUserId(userId);
                noteService.deleteSendNote(noteDeleteDto);
                resultMap.put("message", "SUCCESS");
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } else {
            resultMap.put("message", "access token timeout");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
    @GetMapping("/note/check")
    public ResponseEntity<Map<String, Object>> notReadNote(HttpServletRequest request) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String accessToken = request.getHeader("access-token");
        String userId = jwtService.decodeToken(accessToken);
        if (!userId.equals("access token timeout")) {
            try{
                int result = noteService.checkCountNote(userId);
                resultMap.put("message", "SUCCESS");
                resultMap.put("notReadNoteCount", result);
                status = HttpStatus.ACCEPTED;
            }catch (Exception e){
                resultMap.put("message", "FAIL");
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
        } else {
            resultMap.put("message", "access token timeout");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }
}
