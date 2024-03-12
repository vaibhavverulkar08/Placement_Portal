package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.repository.ProjectRepo;
import com.placementportal.repository.StudentRepo;
import com.placementportal.Entity.Project;
import com.placementportal.Entity.Student;

@Service
public class ProjectService {

	@Autowired
	ProjectRepo projectRepo;
	
	public List<Project> showAllProject()
	{
		List<Project> lst = projectRepo.findAll();
		return lst;
	}
	
	public Project getProject(int id)
	{
		Project project = projectRepo.findById(id).get();
		return project;
	}
	
	public void addProject(Project project)
	{
		projectRepo.save(project);
	}
	
	public void updateProject(Project p,int id)
	{
		Project oldPost = projectRepo.findById(id).get();
		oldPost=p;
		projectRepo.save(oldPost);
	}
	
	public void deleteProject(int id)
	{
		projectRepo.deleteById(id);
	}
}
