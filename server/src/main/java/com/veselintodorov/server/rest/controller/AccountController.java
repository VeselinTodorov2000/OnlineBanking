package com.veselintodorov.server.rest.controller;

import com.veselintodorov.server.entity.Account;
import com.veselintodorov.server.rest.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/account")
public class AccountController {
    private final AccountService accountService;

    @Autowired
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping(path = "/all")
    List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @GetMapping(path = "/all/{id}")
    Optional<Account> getAccountById(@PathVariable("id") Long id) {
        return accountService.getAccountById(id);
    }

    @PostMapping
    boolean createAccount(@RequestBody Account account) {
        return accountService.createAccount(account);
    }

    @PutMapping
    boolean updateAccount(@RequestBody Account account) {
        return accountService.updateAccount(account);
    }

    @DeleteMapping(path = "/{id}")
    boolean deleteAccountById(@PathVariable("id") Long id) {
        return accountService.deleteAccountById(id);
    }
}
