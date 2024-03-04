package com.placementportal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placementportal.Entity.AddTpo;

@Repository
public interface AddTpoRepo extends JpaRepository<AddTpo, Integer> 
{
   
	
}
