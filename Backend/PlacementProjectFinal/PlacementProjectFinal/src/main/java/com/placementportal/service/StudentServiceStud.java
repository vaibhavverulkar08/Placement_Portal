package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.repository.StudentRepo;
import com.placementportal.repository.StudentRepoStud;
import com.placementportal.Entity.Student;


@Service
public class StudentServiceStud {

	@Autowired
	StudentRepoStud studentRepo;
	
	public List<Student> showAllPrnNo()
	{
		List<Student> lst = studentRepo.findAll();
		return lst;
	}
	
	public Student getPrn(int id)
	{
		Student student = studentRepo.findById(id).get();
		return student;
	}
	
	public void addPrn(Student student)
	{
		studentRepo.save(student);
	}
	
//	public void updateStudent(Student p,int id)
//	{
//		Student oldPost = studentRepo.findById(id).get();
//		oldPost=p;
//		studentRepo.save(oldPost);
//	}
//	
//	public void deleteStudent(int id)
//	{
//		studentRepo.deleteById(id);
//	}
}
