package com.placementportal.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.placementportal.Entity.AddStudent;
import com.placementportal.helper.ExcelHelper;
import com.placementportal.repository.StudentRepo;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepo studentRepo;

	public void save(MultipartFile file) {
		try {
			List<AddStudent> AddStudents=ExcelHelper.convertExcelToListOfAddStudent(file.getInputStream());
			System.out.println("ListCreated "+AddStudents);
			studentRepo.saveAll(AddStudents);
		} catch (IOException e) {
			System.out.println("Exception Occur");
			e.printStackTrace();
		}
	}
	
	public List<AddStudent> getAllAddStudents(){
		return studentRepo.findAll();
		
	}
}