package com.veselintodorov.server.rest.repository;

import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.entity.Safe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SafeDao extends JpaRepository<Safe, Long> {
}
