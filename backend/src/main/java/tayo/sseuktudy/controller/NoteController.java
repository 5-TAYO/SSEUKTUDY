package tayo.sseuktudy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tayo.sseuktudy.dto.note.NoteInfoDto;
import tayo.sseuktudy.dto.note.NoteRegistDto;
import tayo.sseuktudy.service.NoteServiceImpl;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class NoteController {
    public String []resultType = {"fail","success"};
    private final NoteServiceImpl noteService;
    @Autowired
    NoteController(NoteServiceImpl noteService){
        this.noteService = noteService;
    }

    @PostMapping("/note")
    public ResponseEntity<Map<String, Object>> registNote(@RequestBody NoteRegistDto noteRegistDto){
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
        String userId = "ssafy";
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
        String userId = "ssafy";
        try{
            resultMap.put("list",noteService.listReciveNote(userId));
            resultMap.put("message", "SUCCESS");
            status = HttpStatus.ACCEPTED;
        }catch (Exception e){
            resultMap.put("message", "FAIL");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap,status);
    }
}
