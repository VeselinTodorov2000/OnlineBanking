package com.veselintodorov.server.rest.service;

import com.veselintodorov.server.entity.OnlineBankingUser;

import java.util.List;
import java.util.Optional;

public interface OnlineBankingUserService {
    List<OnlineBankingUser> getAllUsers();

    Optional<OnlineBankingUser> getUserById(Long id);

    Optional<OnlineBankingUser> getUserByUsernameAndPassword(String username, String password);

    boolean createUser(OnlineBankingUser onlineBankingUser);

    boolean updateUser(OnlineBankingUser onlineBankingUser);

    boolean deleteUserById(Long id);
}
