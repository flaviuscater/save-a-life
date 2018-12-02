package com.savealife.savealive.service;

import com.savealife.savealive.model.Hospital;
import com.savealife.savealive.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.Optional;

@Service("hospitalService")
public class HospitalService implements  IHospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

    @Override
    public Hospital getHospitalById(long id) {
       return hospitalRepository.findById(id).get();
    }

    @Override
    public Iterable<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }

    @Override
    public void deleteHospital(long id) {
        hospitalRepository.deleteById(id);
    }

    @Override
    public ResponseEntity<Object> createHospital(Hospital hospital) {
        Hospital savedHospital = hospitalRepository.save(hospital);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                        .buildAndExpand(savedHospital.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @Override
    public ResponseEntity<Object> updateHospital(Hospital hospital, long id) {
        Optional<Hospital> hospitalOptional = hospitalRepository.findById(id);

        if (!hospitalOptional.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        hospital.setId(id);
        hospitalRepository.save(hospital);
        return ResponseEntity.noContent().build();
    }
}
