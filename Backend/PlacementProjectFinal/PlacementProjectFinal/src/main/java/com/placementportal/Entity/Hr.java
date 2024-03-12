package com.placementportal.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Hr {
	@Id
	//hrId
	private String HrName;//change h to small letter same for all
	private String CompanyName;  //c is small
	private String Email;//hrEmail
	private double contact;//hrContact
	//password
	public Hr() {
		super();
	}

	public Hr(String hrName, String companyName, String email, double contact) {
		super();
		HrName = hrName;
		CompanyName = companyName;
		Email = email;
		this.contact = contact;
	}

	public String getHrName() {
		return HrName;
	}

	public void setHrName(String hrName) {
		HrName = hrName;
	}

	public String getCompanyName() {
		return CompanyName;
	}

	public void setCompanyName(String companyName) {
		CompanyName = companyName;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	public double getContact() {
		return contact;
	}

	public void setContact(double contact) {
		this.contact = contact;
	}

	@Override
	public String toString() {
		return "Hr [HrName=" + HrName + ", CompanyName=" + CompanyName + ", Email=" + Email + ", contact=" + contact
				+ "]";
	}

	
	
}
