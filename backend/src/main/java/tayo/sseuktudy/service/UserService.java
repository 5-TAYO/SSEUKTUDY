package tayo.sseuktudy.service;

import tayo.sseuktudy.dto.UserRegistDto;

public interface UserService {

    String registUser(UserRegistDto request) throws Exception;

}
