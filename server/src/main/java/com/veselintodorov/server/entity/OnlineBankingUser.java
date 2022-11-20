package com.veselintodorov.server.entity;

import javax.persistence.*;

@Entity
@Table(name = "ONLINE_BANKING_USER")
public class OnlineBankingUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;

    @Column(name="username")
    private String username;

    @Column(name="password")
    private String password;

    public OnlineBankingUser() {
        this(null, null, null);
    }

    public OnlineBankingUser(Long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
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

    @Override
    public String toString() {
        return "OnlineBankingUser{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
