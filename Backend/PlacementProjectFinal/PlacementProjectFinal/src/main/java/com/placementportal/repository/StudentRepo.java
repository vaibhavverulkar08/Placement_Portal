package com.placementportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.placementportal.Entity.AddStudent;
import com.placementportal.Entity.Student;

public interface StudentRepo extends JpaRepository<AddStudent,Integer>{

}
