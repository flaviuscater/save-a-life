package com.savealife.savealive.security.controller;


import com.savealife.savealive.security.model.User;
import com.savealife.savealive.security.model.UserDto;
import com.savealife.savealive.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    //@Secured({"ROLE_ADMIN", "ROLE_USER"})
    @PreAuthorize("hasRole('ADMIN')")
    @RequestMapping(value = "/users", method = RequestMethod.GET)
    public List<User> listUsers() {
        return userService.findAll();
    }

    //@Secured("ROLE_USER")
    //@PreAuthorize("hasRole('USER')")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    @RequestMapping(value = "/users/{username}", method = RequestMethod.GET)
    public User getOne(@PathVariable(value = "username") String  username) {
        return userService.findOne(username);
    }


    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public User saveUser(@RequestBody UserDto user) {
        return userService.save(user);
    }


}
