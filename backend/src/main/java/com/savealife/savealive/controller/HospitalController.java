package com.savealife.savealive.controller;

import com.savealife.savealive.model.Hospital;
import com.savealife.savealive.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @CrossOrigin (origins = "http://localhost:4200")
    @GetMapping(value = "/hospitals")
    public List<Hospital> getHospitals() {
        return hospitalService.getAllHospitals();
    }

    @GetMapping(value = "/hospitals/{id}")
    public Hospital getHospital(@PathVariable("id") long id) {
        return hospitalService.getHospitalById(id);
    }

    @DeleteMapping(value = "/hospitals/{id}")
    public void deleteHospital(@PathVariable("id") long id) {
        hospitalService.deleteHospital(id);
    }

    @PostMapping(value = "/hospitals")
    public ResponseEntity<Object> createHospital(@RequestBody Hospital hospital) {
        return hospitalService.createHospital(hospital);
    }

    @PutMapping(value = "/hospitals/{id}")
    public ResponseEntity<Object> updateHospital(@RequestBody Hospital hospital, @PathVariable long id) {
        return hospitalService.updateHospital(hospital, id);
    }
}
