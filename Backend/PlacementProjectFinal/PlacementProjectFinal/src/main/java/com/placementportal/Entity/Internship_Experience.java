package com.placementportal.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;

@Entity
public class Internship_Experience {
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "internId", referencedColumnName = "studprn")
    private Student student;
		@Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="internId")
		private int internId;
		

		@Column(name="companyName")
		private String companyName ;
		
		@Column(name="internRole")
		private String internRole;
		
		@Column(name="description")
		private String internDescription;
		
		@Column(name="employementType")
		private String employementType;
		
		@Column(name="startDate")
		private String startDate;
		
		@Column(name="endDate")
		private String endDate;


		public int getInternId() {
			return internId;
		}

		public void setInternId(int internId) {
			this.internId = internId;
		}
		
		
		public Student getStudent() {
			return student;
		}
		

		public void setStudent(Student student) {
			this.student = student;
		}

		public String getCompanyName() {
			return companyName;
		}

		public void setCompanyName(String companyName) {
			this.companyName = companyName;
		}

		public String getInternRole() {
			return internRole;
		}

		public void setInternRole(String internRole) {
			this.internRole = internRole;
		}

		public String getInternDescription() {
			return internDescription;
		}

		public void setInternDescription(String internDescription) {
			this.internDescription = internDescription;
		}

		public String getEmployementType() {
			return employementType;
		}

		public void setEmployementType(String employementType) {
			this.employementType = employementType;
		}

		public String getStartDate() {
			return startDate;
		}

		public void setStartDate(String startDate) {
			this.startDate = startDate;
		}

		public String getEndDate() {
			return endDate;
		}

		public void setEndDate(String endDate) {
			this.endDate = endDate;
		}

		public Internship_Experience(Student student, int internId, String companyName, String internRole, String internDescription,
				String employementType, String startDate, String endDate) {
			super();
			this.internId=internId;
			this.student = student;
			this.companyName = companyName;
			this.internRole = internRole;
			this.internDescription = internDescription;
			this.employementType = employementType;
			this.startDate = startDate;
			this.endDate = endDate;
		}

		@Override
		public String toString() {
			return "Internship_Experience [student=" + student + ", internId=" + internId + ", companyName="
					+ companyName + ", internRole=" + internRole + ", internDescription=" + internDescription
					+ ", employementType=" + employementType + ", startDate=" + startDate + ", endDate=" + endDate
					+ "]";
		}

		public Internship_Experience() {
			super();
			// TODO Auto-generated constructor stub
		}

		
}

