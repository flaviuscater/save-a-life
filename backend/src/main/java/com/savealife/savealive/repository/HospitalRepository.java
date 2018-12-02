package com.savealife.savealive.repository;

import com.savealife.savealive.model.Hospital;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("hospitalRepository")
public interface HospitalRepository extends CrudRepository<Hospital, Long> {

    List<Hospital> findByName(String name);
}
