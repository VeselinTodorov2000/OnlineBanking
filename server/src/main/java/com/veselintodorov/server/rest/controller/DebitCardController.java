package com.veselintodorov.server.rest.controller;

import com.veselintodorov.server.entity.DebitCard;
import com.veselintodorov.server.rest.service.DebitCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/card")
public class DebitCardController {
    private final DebitCardService debitCardService;

    @Autowired
    public DebitCardController(DebitCardService debitCardService) {
        this.debitCardService = debitCardService;
    }

    @GetMapping(path = "/all")
    List<DebitCard> getAllCards() {
        return debitCardService.getAllCards();
    }

    @GetMapping(path = "/all/{id}")
    Optional<DebitCard> getCardById(@PathVariable("id") Long id) {
        return debitCardService.getCardById(id);
    }

    @GetMapping(path = "/all/number={cn}&date={d}&cvv={cvv}")
    Optional<DebitCard> getDebitCardByData(@PathVariable("cn") String cardNumber,
                                           @PathVariable("d") Date expiryDate,
                                           @PathVariable("cvv") Long cvv) {
        return debitCardService.getDebitCardByData(cardNumber, expiryDate, cvv);
    }

    @PostMapping
    boolean createCard(@RequestBody DebitCard debitCard) {
        return debitCardService.createCard(debitCard);
    }

    @PutMapping
    boolean updateCard(@RequestBody DebitCard debitCard) {
        return debitCardService.updateCard(debitCard);
    }

    @DeleteMapping(path="/{id}")
    boolean deleteCardById(@PathVariable("id") Long id) {
        return debitCardService.deleteCardById(id);
    }
}
