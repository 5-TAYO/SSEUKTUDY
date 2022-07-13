package tayo.sseuktudy.service.study;

import tayo.sseuktudy.dto.study.*;

import java.util.List;

public interface StudyService {
    public int registStudy(StudyRegistDto studyRegistDto);
    public int modifyStudy(StudyModifyDto studyModifyDto);
    public int deleteStudy(StudyUserIdDto studyUserIdDto);
    public StudyInfoListDto getStudyByFilter(StudyFilterDto studyFilterDto);
    public StudyInfoListDto getStudyByUserId(StudyUserFilterDto studyUserFilterDto);
    public List<StudyInfoDto> getStudyByLeader(String userId);
    public StudyDetailDto getStudyByStudyId(int studyId);
    public int likeStudy(StudyUserIdDto studyUserIdDto);
    public List<StudyInfoDto> getLikeStudy(String userId);
    public int leaderCheck(StudyUserIdDto studyUserIdDto);
}
