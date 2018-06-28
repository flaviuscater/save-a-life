package com.savealife.savealive;

import com.savealife.savealive.model.Hospital;
import com.savealife.savealive.repository.HospitalRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


@SpringBootApplication
public class SavealiveApplication {

    private static final Logger logger = LoggerFactory.getLogger(SavealiveApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SavealiveApplication.class, args);
	}

    @Bean
    public CommandLineRunner setup(HospitalRepository hospitalRepository) {
        return (args) -> {
            hospitalRepository.save(new Hospital("Spitalul Clinic Județean de Urgență Pius Brînzeu Timișoara", "Bulevardul Liviu Rebreanu 156, Timișoara 300723"));
            hospitalRepository.save(new Hospital("Spitalul Clinic Municipal de Urgență", "Strada Gheorghe Dima, Timișoara"));
            hospitalRepository.save(new Hospital("Spitalul Clinic de Urgență pentru Copii Louis Țurcanu", "Strada Doctor Iosif Nemoianu 2, Timișoara 300011"));
            hospitalRepository.save(new Hospital("Spitalul Militar de Urgență Dr. Victor Popescu", "Strada Gheorghe Lazăr 7, Timișoara"));
            hospitalRepository.save(new Hospital("Spitalul Universitar de Urgență București", "Splaiul Independenței 169, București 050098"));
            hospitalRepository.save(new Hospital("Spitalul Clinic Județean de Urgență Cluj", "Strada Clinicilor 3-5, Cluj-Napoca, Cluj 400000"));
            logger.info("The sample data has been generated");
        };
    }
}
