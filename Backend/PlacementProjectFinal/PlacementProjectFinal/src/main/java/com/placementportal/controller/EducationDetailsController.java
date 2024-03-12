package com.placementportal.controller;

import java.util.ArrayList;
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

import com.placementportal.Entity.EducationDetails;
import com.placementportal.service.EducationDetailsService;

@RestController
@CrossOrigin("*")
public class EducationDetailsController {

	@Autowired
	EducationDetailsService educationDetailsService;
	
//	List<Post> lst = new ArrayList<>();
	@GetMapping("EducationDetails")
	public List<EducationDetails> getPosts(){
		return educationDetailsService.showAllEducationDetails();
	}
	
	@GetMapping("/EducationDetails/{id}")
	public EducationDetails getPost(@PathVariable int id)
	{
		return educationDetailsService.getEducationDetails(id);
	}
	
	@PostMapping("/addEducationDetails")
	public void addEducationDetails(@RequestBody EducationDetails educationDetails)
	{
		educationDetailsService.addEducationDetails(educationDetails);
	}
	
	@PutMapping("/EducationDetails/{id}")
	public void updatePost(@RequestBody EducationDetails educationDetails,@PathVariable int id)
	{
		educationDetailsService.updateEducationDetails(educationDetails,id);
	}
	
	@DeleteMapping("/EducationDetails/{id}")
	public void deletePost(@PathVariable int id)
	{
		educationDetailsService.deleteEducationDetails(id);
	}
}
