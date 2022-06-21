package tayo.sseuktudy.service.study;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tayo.sseuktudy.dto.study.StudyRegistDto;
import tayo.sseuktudy.mapper.StudyMapper;

import java.util.Optional;

@Service
public class StudyServiceImpl implements StudyService{

    private final StudyMapper studyMapper;

    @Autowired
    public StudyServiceImpl(StudyMapper studyMapper){
        this.studyMapper = studyMapper;
    }

    @Override
    public int registStudy(StudyRegistDto studyRegistDto) {
        return studyMapper.registStudy(studyRegistDto);
    }
}
