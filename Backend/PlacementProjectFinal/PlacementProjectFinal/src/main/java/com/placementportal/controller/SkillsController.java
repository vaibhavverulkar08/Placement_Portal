//package com.placementportal.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.placementportal.Entity.Skills;
//import com.placementportal.service.SkillsService;
//
//
//@RestController
//@CrossOrigin("*")
//public class SkillsController {
//	@Autowired
//	SkillsService skillsService;
//	
////	List<Post> lst = new ArrayList<>();
//	@GetMapping("/Skills")
//	public List<Skills> getSkills(){
//		return skillsService.showAllSkills();
//	}
//	
//	@GetMapping("/Skills/{id}")
//	public Skills getSkills(@PathVariable int id)
//	{
//		return skillsService.getSkills(id);
//	}
//	
//	@PostMapping("/addSkills")
//	public void addSkills(@RequestBody Skills skills)
//	{
//		skillsService.addSkills(skills);
//	}
//	
//	@PutMapping("/Skills/{id}")
//	public void updateSkills(@RequestBody Skills skills,@PathVariable int id)
//	{
//		skillsService.updateSkills(skills,id);
//	}
//	
//	@DeleteMapping("/Skills/{id}")
//	public void deleteSkills(@PathVariable int id)
//	{
//		skillsService.deleteSkills(id);
//	}
//}




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

import com.placementportal.Entity.Skills;
import com.placementportal.service.SkillsService;


@RestController
@CrossOrigin("*")
public class SkillsController {
	@Autowired
	SkillsService skillsService;
	
//	List<Post> lst = new ArrayList<>();
	@GetMapping("/Skills")
	public List<Skills> getSkills(){
		return skillsService.showAllSkills();
	}
	
	@GetMapping("/Skills/{id}")
	public Skills getSkills(@PathVariable int id)
	{
		return skillsService.getSkills(id);
	}
	
	@PostMapping("/addSkills")
	public void addSkills(@RequestBody Skills skills)
	{
		skillsService.addSkills(skills);
	}
	
	@PutMapping("/Skills/{id}")
	public void updateSkills(@RequestBody Skills skills,@PathVariable int id)
	{
		skillsService.updateSkills(skills,id);
	}
	
	@DeleteMapping("/Skills/{id}")
	public void deleteSkills(@PathVariable int id)
	{
		skillsService.deleteSkills(id);
	}
}