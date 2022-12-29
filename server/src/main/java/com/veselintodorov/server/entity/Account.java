package com.veselintodorov.server.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "ACCOUNT")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "iban",nullable = false)
    private String iban;

    @Column(name = "funds",nullable = false)
    private BigDecimal funds;

    @OneToOne
    private DebitCard debitCard;

    @OneToMany
    private List<Safe> safes;

    @OneToMany
    private List<Transaction> transactions;

    public Account() {
        this(0L, null, null, null, null, null);
    }

    public Account(@JsonProperty("id") Long id,
                   @JsonProperty("iban") String iban,
                   @JsonProperty("funds") BigDecimal funds,
                   @JsonProperty("debitCard") DebitCard debitCard,
                   @JsonProperty("safes") List<Safe> safes,
                   @JsonProperty("transactions") List<Transaction> transactions) {
        this.id = id;
        this.iban = iban;
        this.funds = funds;
        this.debitCard = debitCard;
        this.safes = safes;
        this.transactions = transactions;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public BigDecimal getFunds() {
        return funds;
    }

    public void setFunds(BigDecimal funds) {
        this.funds = funds;
    }

    public DebitCard getDebitCard() {
        return debitCard;
    }

    public void setDebitCard(DebitCard debitCard) {
        this.debitCard = debitCard;
    }

    public List<Safe> getSafes() {
        return safes;
    }

    public void setSafes(List<Safe> safes) {
        this.safes = safes;
    }

    public List<Transaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<Transaction> transactions) {
        this.transactions = transactions;
    }
}
