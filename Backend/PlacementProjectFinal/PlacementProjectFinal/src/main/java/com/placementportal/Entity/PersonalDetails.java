package com.placementportal.Entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "personaldetails", schema = "placement_portal")
public class PersonalDetails {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "p_id")
	    private int personalDetailsId;

	    @OneToOne
	    @JoinColumn(name = "p_id", referencedColumnName = "studprn")
	    private Student student;

	    @Column(name = "password")
	    private String password;
//	    private String password = "Pass@123"; // Set default password
	    
	    @Column(name = "fullname")
	    private String fullName;

	    @Column(name = "student_gender")
	    private String gender;

	    @Column(name = "email")
	    private String email;

	    @Column(name = "mobile")
	    private int mobile;

	    @Column(name = "date")
	    private Date dateOfBirth;

	    @Column(name = "address")
	    private String Address;
	    
	    

		public int getPersonalDetailsId() {
			return personalDetailsId;
		}



		public void setPersonalDetailsId(int personalDetailsId) {
			this.personalDetailsId = personalDetailsId;
		}



		public Student getStudent() {
			return student;
		}



		public void setStudent(Student student) {
			this.student = student;
		}



		public String getPassword() {
			return password;
		}



		public void setPassword(String password) {
			this.password = password;
		}



		public String getFullName() {
			return fullName;
		}



		public void setFullName(String fullName) {
			this.fullName = fullName;
		}



		public String getGender() {
			return gender;
		}



		public void setGender(String gender) {
			this.gender = gender;
		}



		public String getEmail() {
			return email;
		}



		public void setEmail(String email) {
			this.email = email;
		}



		public int getMobile() {
			return mobile;
		}



		public void setMobile(int mobile) {
			this.mobile = mobile;
		}



		public Date getDateOfBirth() {
			return dateOfBirth;
		}



		public void setDateOfBirth(Date dateOfBirth) {
			this.dateOfBirth = dateOfBirth;
		}



		public String getAddress() {
			return Address;
		}



		public void setAddress(String address) {
			Address = address;
		}

		public PersonalDetails() {
			super();
		}

		public PersonalDetails(int personalDetailsId, Student student, String password, String fullName, String gender,
				String email, int mobile, Date dateOfBirth, String address) {
			super();
			this.personalDetailsId = personalDetailsId;
			this.student = student;
			this.password = password;
			this.fullName = fullName;
			this.gender = gender;
			this.email = email;
			this.mobile = mobile;
			this.dateOfBirth = dateOfBirth;
			Address = address;
		}



		@Override
		public String toString() {
			return "PersonalDetails [personalDetailsId=" + personalDetailsId + ", student=" + student + ", password="
					+ password + ", fullName=" + fullName + ", gender=" + gender + ", email=" + email + ", mobile="
					+ mobile + ", dateOfBirth=" + dateOfBirth + ", Address=" + Address + "]";
		}

	    
}



