package com.veselintodorov.server.rest.service;

import com.veselintodorov.server.entity.DebitCard;
import com.veselintodorov.server.entity.OnlineBankingUser;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface DebitCardService {
    List<DebitCard> getAllCards();

    Optional<DebitCard> getCardById(Long id);

    Optional<DebitCard> getDebitCardByData(String cardNumber, Date expiryDate, Long cvv);

    boolean createCard(DebitCard debitCard);

    boolean updateCard(DebitCard debitCard);

    boolean deleteCardById(Long id);
}
