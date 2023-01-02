package com.veselintodorov.server.rest.service;

import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.entity.Transaction;

import java.util.List;
import java.util.Optional;

public interface TransactionService {
    List<Transaction> getAllTransactions();

    Optional<Transaction> getTransactionById(Long id);

    Transaction createTransaction(Transaction transaction);

    boolean updateTransaction(Transaction transaction);

    boolean deleteTransactionById(Long id);
}
