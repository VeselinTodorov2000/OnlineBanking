package com.veselintodorov.server.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "SAFE")
public class Safe {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String safeName;

    private String keygen;

    private BigDecimal funds;

    public Safe() {
        this(0L, null, null, null);
    }

    public Safe(@JsonProperty("id") Long id,
                @JsonProperty("safeName") String safeName,
                @JsonProperty("keygen") String keygen,
                @JsonProperty("funds") BigDecimal funds) {
        this.id = id;
        this.safeName = safeName;
        this.keygen = keygen;
        this.funds = funds;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSafeName() {
        return safeName;
    }

    public void setSafeName(String safeName) {
        this.safeName = safeName;
    }

    public String getKeygen() {
        return keygen;
    }

    public void setKeygen(String keygen) {
        this.keygen = keygen;
    }

    public BigDecimal getFunds() {
        return funds;
    }

    public void setFunds(BigDecimal funds) {
        this.funds = funds;
    }
}
