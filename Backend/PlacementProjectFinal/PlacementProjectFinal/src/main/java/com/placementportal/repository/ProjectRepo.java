package com.placementportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placementportal.Entity.PersonalDetails;
import com.placementportal.Entity.Project;

public interface ProjectRepo extends JpaRepository<Project, Integer>{

}
