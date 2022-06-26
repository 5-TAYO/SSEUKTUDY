package tayo.sseuktudy.service.study;

import tayo.sseuktudy.dto.study.*;

public interface StudyService {
    public int registStudy(StudyRegistDto studyRegistDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyDeleteDto studyDeleteDto);
}
