package tayo.sseuktudy.mapper;

import org.apache.ibatis.annotations.Mapper;
import tayo.sseuktudy.dto.study.StudyRegistDto;

import java.util.Optional;

@Mapper
public interface StudyMapper {

    public int registStudy(StudyRegistDto studyRegistDto);
}
