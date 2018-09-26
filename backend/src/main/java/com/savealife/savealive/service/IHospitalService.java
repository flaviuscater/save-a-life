package com.savealife.savealive.service;

import com.savealife.savealive.model.Hospital;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface IHospitalService {
    Hospital getHospitalById(long id);
    List<Hospital> getAllHospitals();
    void deleteHospital(long id);
    ResponseEntity<Object> createHospital(Hospital hospital);
    ResponseEntity<Object> updateHospital(Hospital hospital, long id);
}
