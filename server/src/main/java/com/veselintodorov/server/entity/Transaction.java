package com.veselintodorov.server.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "TRANSACTION")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private BigDecimal funds;

    private LocalDate issueDate;

    private String receiverIban;

    public Transaction() {
        this(0L, null, null, null);
    }

    public Transaction(@JsonProperty("id") Long id,
                       @JsonProperty("funds") BigDecimal funds,
                       @JsonProperty("issueDate")LocalDate issueDate,
                       @JsonProperty("receiverIban") String receiverIban) {
        this.id = id;
        this.funds = funds;
        this.issueDate = issueDate;
        this.receiverIban = receiverIban;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BigDecimal getFunds() {
        return funds;
    }

    public void setFunds(BigDecimal funds) {
        this.funds = funds;
    }

    public LocalDate getIssueDate() {
        return issueDate;
    }

    public void setIssueDate(LocalDate issueDate) {
        this.issueDate = issueDate;
    }

    public String getReceiverIban() {
        return receiverIban;
    }

    public void setReceiverIban(String receiverIban) {
        this.receiverIban = receiverIban;
    }
}
