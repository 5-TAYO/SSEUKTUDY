package tayo.sseuktudy;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SseuktudyApplication extends SpringBootServletInitializer {
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder){
		return builder.sources(SseuktudyApplication.class);
	}
	public static void main(String[] args) {
		SpringApplication.run(SseuktudyApplication.class, args);
	}
	//2022-06-15 : 강-백엔트 커밋 테스트
}
