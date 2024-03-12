//package com.placementportal.controller;
//
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.placementportal.Entity.AtEmailRequest;
//import com.placementportal.service.AtEmailService;
//
//@RestController
//public class AtEmailController {
//
//	@Autowired
//	AtEmailService emailService;
//	
//	//handler to send email
//	@PostMapping("/sendemail")
//	public ResponseEntity<?> sendEmail(@RequestBody AtEmailRequest request){
//		boolean result=emailService.sendEmail(request.getTo(), request.getSubject(), request.getBody(),request.getAttachment());
//		if(result) {
//			System.out.println(request);
//			return ResponseEntity.ok("Email has been sent successfully");
//		}
//		else
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email not sent");
//	}
//}
