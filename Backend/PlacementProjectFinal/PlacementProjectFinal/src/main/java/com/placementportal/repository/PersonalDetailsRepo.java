package com.placementportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placementportal.Entity.Internship_Experience;
import com.placementportal.Entity.PersonalDetails;

public interface PersonalDetailsRepo extends JpaRepository<PersonalDetails, Integer>{

}
