package com.veselintodorov.server.rest.service;

import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.entity.Safe;

import java.util.List;
import java.util.Optional;

public interface SafeService {

    List<Safe> getAllSafes();

    List<Safe> getAllSafesByUserId(Long id);

    Optional<Safe> getSafeById(Long id);

    Safe createSafe(Safe safe);

    boolean updateSafe(Safe safe);

    boolean deleteSafeById(Long id);
}
