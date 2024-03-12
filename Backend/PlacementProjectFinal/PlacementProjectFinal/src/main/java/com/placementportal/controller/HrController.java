package com.placementportal.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.placementportal.Entity.Hr;
import com.placementportal.helper.ExcelHelper;
import com.placementportal.service.HrService;


@RestController
@CrossOrigin("*")
@RequestMapping("/placementPortalHr")
public class HrController {
	
	@Autowired
	private HrService hrService;
	
	@PostMapping("/company/upload")
	public ResponseEntity<?> upload(@RequestParam("file") MultipartFile file){
		if(ExcelHelper.checkExcelFormat(file)) {
			hrService.save(file);
			return ResponseEntity.ok(Map.of("message", "File is uploaded and data saved"));
		}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Please upload excel file");
		
	}
	
	@GetMapping("/company")
	public List<Hr> getAllCompany(){
		return hrService.getAllCompany();

}
}
