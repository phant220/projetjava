package com.example.hotel.controller;

import com.example.hotel.model.Chambre;
import com.example.hotel.repository.ChambreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/chambres")
@CrossOrigin("*")
public class ChambreController {

    @Autowired
    private ChambreRepository repository;

    @GetMapping
    public List<Chambre> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Chambre create(@RequestBody Chambre chambre) {
        return repository.save(chambre);
    }

    @PutMapping("/{id}")
    public Chambre update(@PathVariable Long id, @RequestBody Chambre chambre) {
        chambre.setId(id);
        return repository.save(chambre);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
