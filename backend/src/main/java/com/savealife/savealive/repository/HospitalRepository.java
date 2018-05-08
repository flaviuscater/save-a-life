package com.savealife.savealive.repository;

import com.savealife.savealive.model.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("hospitalRepository")
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
}
