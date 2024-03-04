package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.repository.Internship_ExperienceRepo;
import com.placementportal.repository.StudentRepo;
import com.placementportal.Entity.Internship_Experience;
import com.placementportal.Entity.Student;

@Service
public class Internship_ExperienceService {

	@Autowired
	Internship_ExperienceRepo internship_ExperienceRepo;
	
	public List<Internship_Experience> showAllInternship_Experience()
	{
		List<Internship_Experience> lst = internship_ExperienceRepo.findAll();
		return lst;
	}
	
	public Internship_Experience getInternship_Experience(int id)
	{
		Internship_Experience internship_Experience = internship_ExperienceRepo.findById(id).get();
		return internship_Experience;
	}
	
	public void addInternship_Experience(Internship_Experience internship_Experience)
	{
		internship_ExperienceRepo.save(internship_Experience);
	}
	
//	public void updateInternship_Experience(Internship_Experience p,int id)
//	{
//		Internship_Experience oldPost = internship_ExperienceRepo.findById(id).get();
//		oldPost=p;
//		internship_ExperienceRepo.save(oldPost);
//	}
	
//	public void deleteInternship_Experience(int id)
//	{
//		internship_ExperienceRepo.deleteById(id);
//	}
}
