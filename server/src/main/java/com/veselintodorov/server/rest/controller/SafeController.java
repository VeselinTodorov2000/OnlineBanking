package com.veselintodorov.server.rest.controller;

import com.veselintodorov.server.entity.OnlineBankingUser;
import com.veselintodorov.server.entity.Safe;
import com.veselintodorov.server.rest.service.SafeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/safe")
public class SafeController {
    private final SafeService safeService;

    @Autowired
    public SafeController(SafeService safeService) {
        this.safeService = safeService;
    }

    @GetMapping(path = "/all")
    public List<Safe> getAllSafes() {
        return safeService.getAllSafes();
    }

    @GetMapping(path = "/all/{id}")
    public Optional<Safe> getSafeById(@PathVariable("id") Long id) {
        return safeService.getSafeById(id);
    }

    @PostMapping
    public Safe createSafe(@RequestBody Safe safe) {
        return safeService.createSafe(safe);
    }

    @PutMapping
    public boolean updateSafe(@RequestBody Safe safe) {
        return safeService.updateSafe(safe);
    }

    @DeleteMapping(path = "/{id}")
    public boolean deleteSafeById(@PathVariable("id") Long id) {
        return safeService.deleteSafeById(id);
    }
}
