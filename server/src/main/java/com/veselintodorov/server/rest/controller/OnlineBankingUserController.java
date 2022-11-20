package com.veselintodorov.server.rest.controller;

import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.rest.service.OnlineBankingUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/user")
public class OnlineBankingUserController {
    @Autowired
    private OnlineBankingUserService onlineBankingUserService;

    @GetMapping(path = "/all")
    public List<OnlineBankingUser> getAllUsers() {
        return onlineBankingUserService.getAllUsers();
    }

    @GetMapping(path = "/all/{id}")
    public Optional<OnlineBankingUser> getUserById(@PathVariable("id") Long id) {
        return onlineBankingUserService.getUserById(id);
    }

    @GetMapping(path = "/all/by/username={username}&password={password}")
    public Optional<OnlineBankingUser> getUserByUsernameAndPassword(@PathVariable("username") String username,
                                                                    @PathVariable("password") String password) {
        return onlineBankingUserService.getUserByUsernameAndPassword(username, password);
    }

    @PostMapping
    public boolean createUser(@RequestBody OnlineBankingUser onlineBankingUser) {
        return onlineBankingUserService.createUser(onlineBankingUser);
    }

    @PutMapping
    public boolean updateUser(@RequestBody OnlineBankingUser onlineBankingUser) {
        return onlineBankingUserService.updateUser(onlineBankingUser);
    }

    @DeleteMapping(path = "/{id}")
    public boolean deleteUserById(@PathVariable("id") Long id) {
        return onlineBankingUserService.deleteUserById(id);
    }
}
