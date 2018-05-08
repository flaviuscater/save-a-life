package com.savealife.savealive.service;

import com.savealife.savealive.model.Hospital;
import com.savealife.savealive.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("hospitalService")
public class HospitalService implements  IHospitalService {

    @Autowired
    HospitalRepository hospitalRepository;

    @Override
    public Hospital getHospitalById(Long id) {
       return  hospitalRepository.findById(id).get();
    }

    @Override
    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }
}
