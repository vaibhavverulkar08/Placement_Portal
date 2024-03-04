package com.placementportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

	@Autowired
	private MailSender mailSender;	
	
	
	public boolean sendEmail(String to[],
							String subject,
							String body) {
		boolean f=false;
		String from="prajwalmote7865@gmail.com";
		
		SimpleMailMessage message=new SimpleMailMessage();
		try {
		message.setFrom(from);
		message.setTo(to);
		message.setText(body);
		message.setSubject(subject);
		
		mailSender.send(message);
		f=true;
		}catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("Mail Sent Successfully");
		return f;
	}

}
