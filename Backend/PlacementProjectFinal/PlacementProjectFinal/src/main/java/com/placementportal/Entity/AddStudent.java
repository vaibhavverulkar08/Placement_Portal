package com.placementportal.Entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AddStudent
{
	@Id
	@Column(name = "studPrn")
//	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private int studPrn;
	private String studName;
	private String studDept;
	private String studEmail;
	
	public AddStudent() {
		// TODO Auto-generated constructor stub
	}

	public AddStudent(int studPrn, String studName, String studDept, String studEmail) {
		super();
		this.studPrn = studPrn;
		this.studName = studName;
		this.studDept = studDept;
		this.studEmail = studEmail;
	}

	public int getStudPrn() {
		return studPrn;
	}

	public void setStudPrn(int studPrn) {
		this.studPrn = studPrn;
	}

	public String getStudName() {
		return studName;
	}

	public void setStudName(String studName) {
		this.studName = studName;
	}

	public String getStudDept() {
		return studDept;
	}

	public void setStudDept(String studDept) {
		this.studDept = studDept;
	}

	public String getStudEmail() {
		return studEmail;
	}

	public void setStudEmail(String studEmail) {
		this.studEmail = studEmail;
	}

	@Override
	public String toString() {
		return "AddStudent [studPrn=" + studPrn + ", studName=" + studName + ", studDept=" + studDept + ", studEmail="
				+ studEmail + "]";
	}
}