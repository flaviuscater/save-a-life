package com.savealife.savealive.service;

import com.savealife.savealive.model.Hospital;

import java.util.List;

public interface IHospitalService {

    Hospital getHospitalById(Long id);
    List<Hospital> getAllHospitals();
}
