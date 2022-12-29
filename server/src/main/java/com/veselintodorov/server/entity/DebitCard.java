package com.veselintodorov.server.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "DEBIT_CARD")
public class DebitCard {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String cardNumber;

    private LocalDate expiryDate;

    private Long cvv;

    public DebitCard() {
        this(0L, null, null, null);
    }

    public DebitCard(@JsonProperty("id") Long id,
                     @JsonProperty("cardNumber") String cardNumber,
                     @JsonProperty("expiryDate") LocalDate expiryDate,
                     @JsonProperty("cvv") Long cvv) {
        this.id = id;
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
        this.cvv = cvv;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCardNumber() {
        return cardNumber;
    }

    public void setCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public Long getCvv() {
        return cvv;
    }

    public void setCvv(Long cvv) {
        this.cvv = cvv;
    }
}
