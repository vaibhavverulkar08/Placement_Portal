package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.repository.EducationDetailsRepo;
import com.placementportal.repository.StudentRepo;
import com.placementportal.Entity.EducationDetails;
import com.placementportal.Entity.Student;

@Service
public class EducationDetailsService {

	@Autowired
	EducationDetailsRepo educationDetailsRepo;
	
	public List<EducationDetails> showAllEducationDetails()
	{
		List<EducationDetails> lst = educationDetailsRepo.findAll();
		return lst;
	}
	
	public EducationDetails getEducationDetails(int id)
	{
		EducationDetails educationDetails = educationDetailsRepo.findById(id).get();
		return educationDetails;
	}
	
	public void addEducationDetails(EducationDetails educationDetails)
	{
		educationDetailsRepo.save(educationDetails);
	}
	
	public void updateEducationDetails(EducationDetails p,int id)
	{
		EducationDetails oldPost = educationDetailsRepo.findById(id).get();
		oldPost=p;
		educationDetailsRepo.save(oldPost);
	}
	
	public void deleteEducationDetails(int id)
	{
		educationDetailsRepo.deleteById(id);
	}
}
