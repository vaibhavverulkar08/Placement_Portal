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

import com.placementportal.service.Internship_ExperienceService;
import com.placementportal.service.StudentServiceStud;
import com.placementportal.Entity.Internship_Experience;
import com.placementportal.Entity.Student;

@RestController
@CrossOrigin("*")
public class Internship_ExperienceController {

	@Autowired
	Internship_ExperienceService internshipService;
	
//	List<Post> lst = new ArrayList<>();
	@GetMapping("/internship")
	public List<Internship_Experience> getPosts(){
		return internshipService.showAllInternship_Experience();
	}
	
//	@GetMapping("/intership/{id}")
//	public Student getPost(@PathVariable int id)
//	{
//		return internshipService.getInternship_Experience(id);
//	}
//	
	@PostMapping("/addInternship_Experience")
	public void addInternship_Experience(@RequestBody Internship_Experience internship_Experience)
	{
		internshipService.addInternship_Experience(internship_Experience);
	}
	
//	@PutMapping("/Post/{id}")
//	public void updatePost(@RequestBody Student student,@PathVariable int id)
//	{
//		internshipService.updateInternship_Experience(student,id);
//	}
//	
//	@DeleteMapping("/Post/{id}")
//	public void deletePost(@PathVariable int id)
//	{
//		internshipService.deleteInternship_Experience(id);
//	}
	
}