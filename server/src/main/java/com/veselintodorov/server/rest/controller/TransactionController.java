package com.veselintodorov.server.rest.controller;

import com.veselintodorov.server.entity.Transaction;
import com.veselintodorov.server.rest.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/transaction")
public class TransactionController {
    private final TransactionService transactionService;

    @Autowired
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping(path = "/all")
    List<Transaction> getAllTransactions() {
        return transactionService.getAllTransactions();
    }

    @GetMapping(path = "/all/{id}")
    Optional<Transaction> getTransactionById(@PathVariable("id") Long id) {
        return transactionService.getTransactionById(id);
    }

    @PostMapping
    Transaction createTransaction(@RequestBody Transaction transaction) {
        return transactionService.createTransaction(transaction);
    }

    @PutMapping
    boolean updateTransaction(@RequestBody Transaction transaction) {
        return transactionService.updateTransaction(transaction);
    }

    @DeleteMapping(path = "/{id}")
    boolean deleteTransactionById(@PathVariable("id") Long id) {
        return transactionService.deleteTransactionById(id);
    }
}
