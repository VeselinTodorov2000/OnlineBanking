package com.veselintodorov.server.rest.service.impl;

import com.veselintodorov.server.entity.Safe;
import com.veselintodorov.server.entity.Transaction;
import com.veselintodorov.server.rest.repository.TransactionDao;
import com.veselintodorov.server.rest.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionServiceImpl implements TransactionService {
    private final TransactionDao transactionDao;

    @Autowired
    public TransactionServiceImpl(TransactionDao transactionDao) {
        this.transactionDao = transactionDao;
    }

    @Override
    public List<Transaction> getAllTransactions() {
        return transactionDao.findAll();
    }

    @Override
    public Optional<Transaction> getTransactionById(Long id) {
        return transactionDao.findById(id);
    }

    @Override
    public Transaction createTransaction(Transaction transaction) {
        return transactionDao.save(transaction);
    }

    @Override
    public boolean updateTransaction(Transaction transaction) {
        Optional<Transaction> optionalTransaction = transactionDao.findById(transaction.getId());
        if (!optionalTransaction.isPresent()) {
            return false;
        }
        Transaction updatedTransaction = optionalTransaction.get();
        updatedTransaction.setIssueDate(transaction.getIssueDate());
        updatedTransaction.setFunds(transaction.getFunds());
        updatedTransaction.setReceiverIban(transaction.getReceiverIban());
        transactionDao.save(updatedTransaction);
        return true;
    }

    @Override
    public boolean deleteTransactionById(Long id) {
        transactionDao.deleteById(id);
        return true;
    }
}
