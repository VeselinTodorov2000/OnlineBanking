--liquibase formatted sql

--changeset vtodorov:1
CREATE TABLE IF NOT EXISTS ONLINE_BANKING_USER (
    id NUMERIC NOT NULL PRIMARY KEY,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(20) NOT NULL,
    country VARCHAR(30) NOT NULL
)

--changeset vtodorov:2
CREATE TABLE IF NOT EXISTS ACCOUNT (
    id NUMERIC NOT NULL PRIMARY KEY,
    iban VARCHAR(20) NOT NULL,
    funds NUMERIC NOT NULL
)

--changeset vtodorov:3
CREATE TABLE IF NOT EXISTS DEBIT_CARD (
    id NUMERIC NOT NULL PRIMARY KEY,
    card_number CHAR(19) NOT NULL,
    expiry_date DATE NOT NULL,
    cvv NUMERIC NOT NULL
)

--changeset vtodorov:4
CREATE TABLE IF NOT EXISTS SAFE (
    id NUMERIC NOT NULL PRIMARY KEY,
    safe_name VARCHAR(30) NOT NULL,
    funds NUMERIC NOT NULL,
    keygen VARCHAR(30) NOT NULL
)

--changeset vtodorov:5
CREATE TABLE IF NOT EXISTS TRANSACTION (
    id NUMERIC NOT NULL PRIMARY KEY,
    funds NUMERIC NOT NULL,
    issue_date DATE NOT NULL
)