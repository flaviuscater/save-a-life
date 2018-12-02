package com.savealife.savealive.service;

import com.savealife.savealive.model.Hospital;
import org.springframework.http.ResponseEntity;

public interface IHospitalService {
    Hospital getHospitalById(long id);
    Iterable<Hospital> getAllHospitals();
    void deleteHospital(long id);
    ResponseEntity<Object> createHospital(Hospital hospital);
    ResponseEntity<Object> updateHospital(Hospital hospital, long id);
}
