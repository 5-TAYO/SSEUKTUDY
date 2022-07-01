package tayo.sseuktudy.service.study;

import tayo.sseuktudy.dto.study.*;

import java.util.List;

public interface StudyService {
    public int registStudy(StudyRegistDto studyRegistDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyUserIdDto studyUserIdDto);
    public List<StudyInfoDto>  getStudyByFilter(StudyFilterDto studyFilterDto);
    public List<StudyInfoDto> getStudyByUserId(String userId);
    public int likeStudy(StudyUserIdDto studyUserIdDto);
    public int leaderCheck(StudyUserIdDto studyUserIdDto);
}
