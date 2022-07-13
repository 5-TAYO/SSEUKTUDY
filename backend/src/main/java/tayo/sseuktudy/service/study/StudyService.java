package tayo.sseuktudy.service.study;

import tayo.sseuktudy.dto.study.*;

import java.util.List;

public interface StudyService {
    public int registStudy(StudyRegistDto studyRegistDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyUserIdDto studyUserIdDto);
    public StudyInfoListDto getStudyByFilter(StudyFilterDto studyFilterDto);
    public StudyInfoListDto getStudyByUserId(StudyUserFilterDto studyUserFilterDto);
    public StudyDetailDto getStudyByStudyId(int studyId);
    public int likeStudy(StudyUserIdDto studyUserIdDto);
    public int leaderCheck(StudyUserIdDto studyUserIdDto);
}
