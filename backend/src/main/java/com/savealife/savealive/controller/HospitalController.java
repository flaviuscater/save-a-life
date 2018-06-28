package com.savealife.savealive.controller;

import com.savealife.savealive.model.Hospital;
import com.savealife.savealive.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
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

    @GetMapping(value = "/hospital/{id}")
    public Hospital getHospital(@PathVariable("id") Long id) {
        return hospitalService.getHospitalById(id);
    }
}
