package com.veselintodorov.server.rest.repository;

import com.veselintodorov.server.entity.OnlineBankingUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OnlineBankingUserDao extends JpaRepository<OnlineBankingUser, Long> {

    Optional<OnlineBankingUser> findByUsernameAndPassword(String username, String password);
}
