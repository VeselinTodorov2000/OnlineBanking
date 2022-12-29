package com.veselintodorov.server.rest.service;

import com.veselintodorov.server.entity.Account;
import com.veselintodorov.server.entity.Transaction;

import java.util.List;
import java.util.Optional;

public interface AccountService {
    List<Account> getAllAccounts();

    Optional<Account> getAccountById(Long id);

    boolean createAccount(Account account);

    boolean updateAccount(Account account);

    boolean deleteAccountById(Long id);
}
