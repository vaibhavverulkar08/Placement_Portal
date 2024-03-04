package com.placementportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.placementportal.service.ProjectService;
import com.placementportal.service.StudentServiceStud;
import com.placementportal.Entity.Project;
import com.placementportal.Entity.Student;

@RestController
@CrossOrigin("*")
public class ProjectController {

	@Autowired
	ProjectService projectService;
	
//	List<Post> lst = new ArrayList<>();
	@GetMapping("/Project")
	public List<Project> getProject(){
		return projectService.showAllProject();
	}
	
	@GetMapping("/Project/{id}")
	public Project getProject(@PathVariable int id)
	{
		return projectService.getProject(id);
	}
	
	@PostMapping("/addProject")
	public void addProject(@RequestBody Project project)
	{
		projectService.addProject(project);
	}
	
	@PutMapping("/Project/{id}")
	public void updateProject(@RequestBody Project project,@PathVariable int id)
	{
		projectService.updateProject(project,id);
	}
	
	@DeleteMapping("/Project/{id}")
	public void deleteStudent(@PathVariable int id)
	{
		projectService.deleteProject(id);
	}
	
}