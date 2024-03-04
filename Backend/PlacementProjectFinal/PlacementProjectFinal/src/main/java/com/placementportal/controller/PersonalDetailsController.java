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

import com.placementportal.service.PersonalDetailsService;
import com.placementportal.service.StudentServiceStud;
import com.placementportal.Entity.PersonalDetails;
import com.placementportal.Entity.Student;

@RestController
@CrossOrigin("*")
public class PersonalDetailsController {

	@Autowired
	PersonalDetailsService personalDetailsService;
	
//	List<Post> lst = new ArrayList<>();
	@GetMapping("/PersonalDetails")
	public List<PersonalDetails> showAllPersonalDetails(){
		return personalDetailsService.showAllPersonalDetails();
	}
	
	@GetMapping("/PersonalDetails/{id}")
	public PersonalDetails getPersonalDetails(@PathVariable int id)
	{
		return personalDetailsService.getPersonalDetails(id);
	}
	
	@PostMapping("/addPersonalDetails")
	public void addPersonalDetails(@RequestBody PersonalDetails personalDetails)
	{
		personalDetailsService.addPersonalDetails(personalDetails);
	}
	
	@PutMapping("/PersonalDetails/{id}")
	public void updatePersonalDetails(@RequestBody PersonalDetails personalDetails,@PathVariable int id)
	{
		personalDetailsService.updatePersonalDetails(personalDetails,id);
	}
	
	@DeleteMapping("/PersonalDetails/{id}")
	public void deletePersonalDetails(@PathVariable int id)
	{
		personalDetailsService.deletePersonalDetails(id);
	}
	
}