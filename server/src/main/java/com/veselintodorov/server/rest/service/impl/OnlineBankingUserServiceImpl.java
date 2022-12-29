package com.veselintodorov.server.rest.service.impl;

import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.rest.repository.OnlineBankingUserDao;
import com.veselintodorov.server.rest.service.OnlineBankingUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OnlineBankingUserServiceImpl implements OnlineBankingUserService {
    private OnlineBankingUserDao onlineBankingUserDao;

    @Autowired
    public OnlineBankingUserServiceImpl(OnlineBankingUserDao onlineBankingUserDao) {
        this.onlineBankingUserDao = onlineBankingUserDao;
    }

    @Override
    public List<OnlineBankingUser> getAllUsers() {
        return onlineBankingUserDao.findAll();
    }

    @Override
    public Optional<OnlineBankingUser> getUserById(Long id) {
        return onlineBankingUserDao.findById(id);
    }

    @Override
    public Optional<OnlineBankingUser> getUserByUsernameAndPassword(String username, String password) {
        return onlineBankingUserDao.findByUsernameAndPassword(username, password);
    }

    @Override
    public boolean createUser(OnlineBankingUser onlineBankingUser) {
        onlineBankingUserDao.save(onlineBankingUser);
        return true;
    }

    @Override
    public boolean updateUser(OnlineBankingUser onlineBankingUser) {
        Optional<OnlineBankingUser> userToUpdate = onlineBankingUserDao.findById(onlineBankingUser.getId());
        if (!userToUpdate.isPresent()) {
            return false;
        }
        OnlineBankingUser bankingUser = userToUpdate.get();
        bankingUser.setUsername(onlineBankingUser.getUsername());
        bankingUser.setPassword(onlineBankingUser.getPassword());
        onlineBankingUserDao.save(bankingUser);
        return true;
    }

    @Override
    public boolean deleteUserById(Long id) {
        onlineBankingUserDao.deleteById(id);
        return true;
    }
}
