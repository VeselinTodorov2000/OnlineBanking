package com.veselintodorov.server.rest.service.impl;

import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.entity.Safe;
import com.veselintodorov.server.rest.repository.OnlineBankingUserDao;
import com.veselintodorov.server.rest.repository.SafeDao;
import com.veselintodorov.server.rest.service.SafeService;
import liquibase.pro.packaged.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class SafeServiceImpl implements SafeService {
    private final SafeDao safeDao;
    private final OnlineBankingUserDao onlineBankingUserDao;

    @Autowired
    public SafeServiceImpl(SafeDao safeDao, OnlineBankingUserDao onlineBankingUserDao) {
        this.safeDao = safeDao;
        this.onlineBankingUserDao = onlineBankingUserDao;
    }

    @Override
    public List<Safe> getAllSafes() {
        return safeDao.findAll();
    }

    @Override
    public List<Safe> getAllSafesByUserId(Long id) {
        Optional<OnlineBankingUser> onlineBankingUserDaoById = onlineBankingUserDao.findById(id);
        if(onlineBankingUserDaoById.isPresent()) {
            return onlineBankingUserDaoById.get().getAccount().getSafes();
        }
        return Collections.emptyList();
    }

    @Override
    public Optional<Safe> getSafeById(Long id) {
        return safeDao.findById(id);
    }

    @Override
    public boolean createSafe(Safe safe) {
        safeDao.save(safe);
        return true;
    }

    @Override
    public boolean updateSafe(Safe safe) {
        Optional<Safe> safeToUpdate = safeDao.findById(safe.getId());
        if (!safeToUpdate.isPresent()) {
            return false;
        }
        Safe updatedSafe = safeToUpdate.get();
        updatedSafe.setSafeName(safe.getSafeName());
        updatedSafe.setFunds(safe.getFunds());
        updatedSafe.setKeygen(safe.getKeygen());
        safeDao.save(safe);
        return true;
    }

    @Override
    public boolean deleteSafeById(Long id) {
        safeDao.deleteById(id);
        return true;
    }
}
