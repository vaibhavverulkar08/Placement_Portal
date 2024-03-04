package com.placementportal.service;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import com.placementportal.Entity.Hr;
import com.placementportal.helper.ExcelHelper;
import com.placementportal.repository.HrRepo;

@Service
public class HrService {

	@Autowired
	private HrRepo hrRepo;

	public void save(MultipartFile file) {
		try {
			List<Hr> company=ExcelHelper.convertExcelToListOfProduct(file.getInputStream());
			hrRepo.saveAll(company);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public List<Hr> getAllCompany(){
		return hrRepo.findAll();
	}
}
