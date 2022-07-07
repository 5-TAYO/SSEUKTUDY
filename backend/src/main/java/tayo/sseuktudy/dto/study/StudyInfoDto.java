package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class StudyInfoDto {
    int studyId;
    String studyTitle;
    String studyIntroduction;
    int studyCategoryId;
    String studyGoals;
    String studyType;
    String studyPlace;
    int studyUserMax;
    int studyUserMin;
    String studyStartdate;
    String studyEnddate;
    String studyRegistdate;
    String studyStatus;
    String studyLeaderId;
    String studyContent;
    int studyView;
    String studyLike;
    int studyCommentCount;
    boolean isStudyLiked;
}
