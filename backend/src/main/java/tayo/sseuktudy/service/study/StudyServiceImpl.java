package tayo.sseuktudy.service.study;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import tayo.sseuktudy.dto.Comment.CommentInfoDto;
import tayo.sseuktudy.dto.member.MemberJoinDto;
import tayo.sseuktudy.dto.question.QuestionModifyDto;
import tayo.sseuktudy.dto.question.QuestionRegistDto;
import tayo.sseuktudy.dto.study.*;
import tayo.sseuktudy.mapper.CommentMapper;
import tayo.sseuktudy.mapper.QuestionMapper;
import tayo.sseuktudy.mapper.StudyMapper;

import java.util.ArrayList;
import java.util.List;

@Service
public class StudyServiceImpl implements StudyService{

    private final StudyMapper studyMapper;
    private final QuestionMapper questionMapper;
    private final CommentMapper commentMapper;
    @Autowired
    public StudyServiceImpl(StudyMapper studyMapper, QuestionMapper questionMapper, CommentMapper commentMapper){
        this.studyMapper = studyMapper;
        this.questionMapper = questionMapper;
        this.commentMapper = commentMapper;
    }


    @Transactional
    @Override
    public int registStudy(StudyRegistDto studyRegistDto) {
        if(studyMapper.registStudy(studyRegistDto) != 1){
            return 0;
        }

        QuestionRegistDto questionRegistDto = new QuestionRegistDto();

        questionRegistDto.setStudyId(studyRegistDto.getStudyId());

        for(String question : studyRegistDto.getStudyPrequestion()){
            questionRegistDto.setQuestionContent(question);
            if(questionMapper.registQuestion(questionRegistDto) != 1){
                return 0;
            }
        }

        MemberJoinDto memberJoinDto = new MemberJoinDto();

        memberJoinDto.setStudyId(studyRegistDto.getStudyId());
        memberJoinDto.setUserId(studyRegistDto.getStudyLeaderId());
        memberJoinDto.setUserStatus("member");

        if(studyMapper.joinStudy(memberJoinDto) != 1){
            return 0;
        }

        return 1;
    }

    @Transactional
    @Override
    public int modifyStudy(StudyModifyDto studyModifyDto){
        for(String question : studyModifyDto.getQuestions()){
            QuestionModifyDto questionModifyDto = new QuestionModifyDto();
            questionModifyDto.setQuestionId(Integer.parseInt(question.split(",")[0]));
            questionModifyDto.setQuestionContent(question.split(",")[1]);

            if(questionMapper.modifyQuestion(questionModifyDto) != 1){
                return 0;
            };
        }


        return studyMapper.modifyStudy(studyModifyDto);
    }

    @Override
    public int deleteStudy(StudyUserIdDto studyUserIdDto) {
        return studyMapper.deleteStudy(studyUserIdDto);
    }

    @Transactional
    @Override
    public StudyInfoListDto getStudyByFilter(StudyFilterDto studyFilterDto) {
        List<StudyInfoDto> studyInfoDtoList = studyMapper.getStudyByFilter(studyFilterDto);

        if(studyFilterDto.getUserId() != "") {
            System.out.println(studyFilterDto.getUserId());
            List<Integer> userLikeStudyId = studyMapper.getLikeStudyIdByUserId(studyFilterDto.getUserId());

            for(StudyInfoDto studyInfoDto : studyInfoDtoList){
                if(userLikeStudyId.contains(studyInfoDto.getStudyId())){
                    studyInfoDto.setStudyLiked(true);
                }
            }
        }

        StudyInfoListDto studyInfoListDto = new StudyInfoListDto();
        studyInfoListDto.setStudyInfoList(studyInfoDtoList);
        studyInfoListDto.setStudyCnt(studyMapper.getStudyCntByFilter(studyFilterDto));
        return studyInfoListDto;
    }

    @Override
    public List<StudyInfoDto> getStudyByUserId(StudyUserFilterDto studyUserFilterDto){
        return studyMapper.getStudyByUserId(studyUserFilterDto);
    }

    @Transactional
    @Override
    public StudyDetailDto getStudyByStudyId(int studyId) {
        studyMapper.raiseStudyView(studyId);
        StudyInfoDto studyInfoDto = studyMapper.getStudyByStudyId(studyId);
        List<CommentInfoDto> commentInfoList = commentMapper.listComment(studyId);

        List<CommentInfoDto> result = new ArrayList<>();
        for (int i = 0; i < commentInfoList.size(); i++) {
            if(commentInfoList.get(i).getUpCommentId() == 0){ //상위 댓글이 본인이라면
                result.add(commentInfoList.get(i));
            }
            else{
                for(int j=0; j<result.size(); j++){
                    if(commentInfoList.get(i).getUpCommentId() == result.get(j).getCommentId()){
                        List<CommentInfoDto> temp = new ArrayList<>();
                        if(result.get(j).getDownComment() != null) {
                            for (int k = 0; k < result.get(j).getDownComment().size(); k++) {
                                temp.add(result.get(j).getDownComment().get(k));
                            }
                        }
                        temp.add(commentInfoList.get(i));
                        result.get(j).setDownComment(temp);
                        break;
                    }
                }
            }
        }



        StudyDetailDto studyDetailDto = new StudyDetailDto();
        studyDetailDto.setStudyInfoDto(studyInfoDto);
        studyDetailDto.setCommentInfoList(result);
        studyInfoDto.setStudyCommentCount(commentInfoList.size());
        return studyDetailDto;
    }

    @Override
    public int likeStudy(StudyUserIdDto studyUserIdDto) {
        return studyMapper.likeStudy(studyUserIdDto);
    }

    @Override
    public int leaderCheck(StudyUserIdDto studyUserIdDto) {
        return studyMapper.leaderCheck(studyUserIdDto);
    }


}
