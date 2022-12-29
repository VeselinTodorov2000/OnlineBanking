package com.veselintodorov.server.entity;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table(name = "ONLINE_BANKING_USER")
public class OnlineBankingUser {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    @Column(name="country")
    private String country;

    @OneToOne
    private Account account;

    public OnlineBankingUser() {
        this(0L, null, null, null, null);
    }

    public OnlineBankingUser(@JsonProperty("id") Long id,
                             @JsonProperty("username") String username,
                             @JsonProperty("password") String password,
                             @JsonProperty("country") String country,
                             @JsonProperty("account") Account account) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.country = country;
        this.account = account;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }
}
