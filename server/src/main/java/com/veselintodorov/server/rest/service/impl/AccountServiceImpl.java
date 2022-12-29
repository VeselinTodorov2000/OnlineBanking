package com.veselintodorov.server.rest.service.impl;

import com.veselintodorov.server.entity.Account;
import com.veselintodorov.server.entity.Transaction;
import com.veselintodorov.server.rest.repository.AccountDao;
import com.veselintodorov.server.rest.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {
    private final AccountDao accountDao;

    @Autowired
    public AccountServiceImpl(AccountDao accountDao) {
        this.accountDao = accountDao;
    }

    @Override
    public List<Account> getAllAccounts() {
        return accountDao.findAll();
    }

    @Override
    public Optional<Account> getAccountById(Long id) {
        return accountDao.findById(id);
    }

    @Override
    public boolean createAccount(Account account) {
        accountDao.save(account);
        return true;
    }

    @Override
    public boolean updateAccount(Account account) {
        Optional<Account> optionalAccount = accountDao.findById(account.getId());
        if (!optionalAccount.isPresent()) {
            return false;
        }
        Account updatedAccount = optionalAccount.get();
        updatedAccount.setIban(account.getIban());
        updatedAccount.setFunds(account.getFunds());
        updatedAccount.setDebitCard(account.getDebitCard());
        updatedAccount.setTransactions(account.getTransactions());
        updatedAccount.setSafes(account.getSafes());
        accountDao.save(updatedAccount);
        return true;
    }

    @Override
    public boolean deleteAccountById(Long id) {
        accountDao.deleteById(id);
        return true;
    }
}
