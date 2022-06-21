package tayo.sseuktudy.dto.study;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class StudyRegistDto {
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
    List<String> studyPrequestion;
    int studyView;
}
