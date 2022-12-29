package com.veselintodorov.server.rest.repository;

import com.veselintodorov.server.entity.DebitCard;
import com.veselintodorov.server.entity.OnlineBankingUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface DebitCardDao extends JpaRepository<DebitCard, Long> {
    Optional<DebitCard> findByCardNumberAndAndExpiryDateAndCvv(String cardNumber, Date expiryDate, Long cvv);
}
