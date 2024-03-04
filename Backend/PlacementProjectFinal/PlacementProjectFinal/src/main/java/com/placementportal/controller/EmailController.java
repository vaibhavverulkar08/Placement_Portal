package com.placementportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.placementportal.Entity.EmailRequest;
import com.placementportal.service.EmailService;

@RestController
@CrossOrigin("*")
public class EmailController {

	@Autowired
	EmailService emailService;
	
	//handler to send email
	@PostMapping("/sendemail")
	public ResponseEntity<?> sendEmail(@RequestBody EmailRequest request){
		boolean result=emailService.sendEmail(request.getTo(), request.getSubject(), request.getBody());
		if(result)
			return ResponseEntity.ok("Email has been sent successfully");
		else
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email not sent");
	}
}
