package com.savealife.savealive;

import com.savealife.savealive.model.Hospital;
import com.savealife.savealive.repository.HospitalRepository;
import com.savealife.savealive.security.controller.UserController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.Arrays;

@SpringBootApplication
public class SavealiveApplication {

    private static final Logger logger = LoggerFactory.getLogger(SavealiveApplication.class);
    private static final Hospital[] hospitals = HospitalsInitializer.getHospitalsArray();

	public static void main(String[] args) {
		SpringApplication.run(SavealiveApplication.class, args);

	}

    @Bean
    public CommandLineRunner setup(HospitalRepository hospitalRepository) {
        return (args) -> {
            Arrays.stream(hospitals).forEach(hospital -> hospitalRepository.save(hospital));
            logger.info("The sample data has been generated");
        };
    }
}
