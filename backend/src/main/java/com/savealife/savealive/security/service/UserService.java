package com.savealife.savealive.security.service;


import com.savealife.savealive.security.model.User;
import com.savealife.savealive.security.model.UserDto;

import java.util.List;

public interface UserService {

    User save(UserDto user);

    List<User> findAll();

    void delete(long id);

    User findOne(String username);

    User findById(Long id);
}
