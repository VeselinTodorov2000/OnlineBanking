package com.veselintodorov.server.rest.service.impl;

import com.veselintodorov.server.entity.DebitCard;
import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.rest.repository.DebitCardDao;
import com.veselintodorov.server.rest.service.DebitCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DebitCardServiceImpl implements DebitCardService {
    private final DebitCardDao debitCardDao;

    @Autowired
    public DebitCardServiceImpl(DebitCardDao debitCardDao) {
        this.debitCardDao = debitCardDao;
    }

    @Override
    public List<DebitCard> getAllCards() {
        return debitCardDao.findAll();
    }

    @Override
    public Optional<DebitCard> getCardById(Long id) {
        return debitCardDao.findById(id);
    }

    @Override
    public Optional<DebitCard> getDebitCardByData(String cardNumber, Date expiryDate, Long cvv) {
        return debitCardDao.findByCardNumberAndAndExpiryDateAndCvv(cardNumber, expiryDate, cvv);
    }

    @Override
    public boolean createCard(DebitCard debitCard) {
        debitCardDao.save(debitCard);
        return true;
    }

    @Override
    public boolean updateCard(DebitCard debitCard) {
        Optional<DebitCard> cardToUpdate = debitCardDao.findById(debitCard.getId());
        if (!cardToUpdate.isPresent()) {
            return false;
        }
        DebitCard updatedCard = cardToUpdate.get();
        updatedCard.setCardNumber(debitCard.getCardNumber());
        updatedCard.setExpiryDate(debitCard.getExpiryDate());
        updatedCard.setCvv(debitCard.getCvv());
        debitCardDao.save(updatedCard);
        return true;
    }

    @Override
    public boolean deleteCardById(Long id) {
        debitCardDao.deleteById(id);
        return true;
    }
}
