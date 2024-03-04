package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.repository.PersonalDetailsRepo;
import com.placementportal.repository.StudentRepo;
import com.placementportal.Entity.PersonalDetails;
import com.placementportal.Entity.Student;

@Service
public class PersonalDetailsService {

	@Autowired
	PersonalDetailsRepo personalDetailsRepo;
	
	public List<PersonalDetails> showAllPersonalDetails()
	{
		List<PersonalDetails> lst = personalDetailsRepo.findAll();
		return lst;
	}
	
	public PersonalDetails getPersonalDetails(int id)
	{
		PersonalDetails personalDetails = personalDetailsRepo.findById(id).get();
		return personalDetails;
	}
	
	public void addPersonalDetails(PersonalDetails personalDetails)
	{
		personalDetailsRepo.save(personalDetails);
	}
	
	public void updatePersonalDetails(PersonalDetails p,int id)
	{
		PersonalDetails oldPost = personalDetailsRepo.findById(id).get();
		oldPost=p;
		personalDetailsRepo.save(oldPost);
	}
	
	public void deletePersonalDetails(int id)
	{
		personalDetailsRepo.deleteById(id);
	}
}
