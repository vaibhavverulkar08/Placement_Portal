package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.Entity.Skills;
import com.placementportal.repository.SkillsRepo;

@Service
public class SkillsService {
	@Autowired
	SkillsRepo skillsRepo;
	
	public List<Skills> showAllSkills()
	{
		List<Skills> lst = skillsRepo.findAll();
		return lst;
	}
	
	public Skills getSkills(int id)
	{
		Skills skills = skillsRepo.findById(id).get();
		return skills;
	}
	
	public void addSkills(Skills skills)
	{
		skillsRepo.save(skills);
	}
	
	public void updateSkills(Skills p,int id)
	{
		Skills oldPost = skillsRepo.findById(id).get();
		oldPost=p;
		skillsRepo.save(oldPost);
	}
	
	public void deleteSkills(int id)
	{
		skillsRepo.deleteById(id);
	}
}