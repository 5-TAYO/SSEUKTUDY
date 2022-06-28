package tayo.sseuktudy.service.study;

import tayo.sseuktudy.dto.study.*;

import java.util.List;

public interface StudyService {
    public int registStudy(StudyRegistDto studyRegistDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyDeleteDto studyDeleteDto);
    public List<StudyInfoDto>  getStudyByFilter(StudyFilterDto studyFilterDto);
}
