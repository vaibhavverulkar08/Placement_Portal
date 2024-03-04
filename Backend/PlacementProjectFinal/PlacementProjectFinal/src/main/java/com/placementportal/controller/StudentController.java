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

import com.placementportal.service.StudentServiceStud;
import com.placementportal.Entity.Student;

@RestController
@CrossOrigin("*")
public class StudentController {

	@Autowired
	StudentServiceStud studentService;
	
//	List<Post> lst = new ArrayList<>();
	@GetMapping("/Student")
	public List<Student> getPrnNo(){
		return studentService.showAllPrnNo();
	}
	
	@GetMapping("/Student/{id}")
	public Student getPrnNO(@PathVariable int id)
	{
		return studentService.getPrn(id);
	}
	
	@PostMapping("/addStudent")
	public void addPrnNo(@RequestBody Student student)
	{
		studentService.addPrn(student);
	}
	
//	@PutMapping("/Student/{id}")
//	public void updateStudent(@RequestBody Student student,@PathVariable int id)
//	{
//		studentService.updateStudent(student,id);
//	}
//	
//	@DeleteMapping("/Student/{id}")
//	public void deleteStudent(@PathVariable int id)
//	{
//		studentService.deleteStudent(id);
//	}
	
}