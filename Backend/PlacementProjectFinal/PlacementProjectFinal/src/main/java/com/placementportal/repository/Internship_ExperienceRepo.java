package com.placementportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placementportal.Entity.EducationDetails;
import com.placementportal.Entity.Internship_Experience;

public interface Internship_ExperienceRepo extends JpaRepository<Internship_Experience, Integer>{

}
