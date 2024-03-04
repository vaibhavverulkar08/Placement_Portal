//package com.placementportal.service;
//
//import java.io.File;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.core.io.FileSystemResource;
//import org.springframework.mail.MailSender;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.mail.javamail.MimeMessageHelper;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import jakarta.mail.internet.MimeMessage;
//
//@Service
//public class AtEmailService {
//
//	@Autowired
//	private JavaMailSender javaMailSender;	
//	
//	
//	public boolean sendEmail(String to[],
//							String subject,
//							String body,
//							String attachment) {
//		boolean f=false;
//		String from="shashankbanait@gmail.com";
//		try {
//			MimeMessage message=javaMailSender.createMimeMessage();
//			MimeMessageHelper mimeMessageHelper=new MimeMessageHelper(message,true);
//			mimeMessageHelper.setFrom(from);
//			mimeMessageHelper.setTo(to);
//			mimeMessageHelper.setText(body);
//			mimeMessageHelper.setSubject(subject);
//		
//		FileSystemResource fileSystemResource=new FileSystemResource(new File(attachment));
//		mimeMessageHelper.addAttachment(fileSystemResource.getFilename(),fileSystemResource);
//		System.out.println();
//		javaMailSender.send(message);
//		
//		f=true;
//		}catch (Exception e) {
//			e.printStackTrace();
//		}
//		System.out.println("Mail Sent Successfully");
//		return f;
//	}
//
//}
