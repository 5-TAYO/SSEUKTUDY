package tayo.sseuktudy.service.study;

import tayo.sseuktudy.dto.study.StudyModifyDto;
import tayo.sseuktudy.dto.study.StudyRegistDto;

import java.util.Optional;

public interface StudyService {
    public int registStudy(StudyRegistDto studyRegistDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
}
