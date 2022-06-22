package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class StudyInfoDto {
    int studyId;
    String studyTitle;
    String studyIntroduction;
    String studyCategoryId;
    String studyGoals;
    String studyType;
    String studyPlace;
    int studyUserMax;
    int studyUserMin;
    String studyStartdate;
    String studyEnddate;
    String studyStatus;
    String studyLeaderId;
    String studyContent;
    int studyView;
}
