package com.placementportal.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="EducationalDetails",schema = "placement_portal")
public class EducationDetails {

	@OneToOne
    @JoinColumn(name = "eduId", referencedColumnName = "studprn")
    private Student student;
	@Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "eduId")
    private int eduId;



	
	//TODO:Make it as an class for Educational  
		//Educational Details fields:
		// sid foregin key ref.
		
		@Column(name="sscschoolname")
		private String sscSchoolName;
		
		@Column(name="ssccgpa")
		private double sscCgpa;
		
		@Column(name="sscYearOfPassing")
		private int sscYearOfPassing;
		
		@Column(name="hsccollegename")
		private String hscCollegeName;
		
		@Column(name="hscstream")
		private String hscStream;
		
		@Column(name="hsccgpa")
		private double hscCgpa;
		
		@Column(name="hscYearOfPassing")
		private int hscYearOfPassing;
		
		@Column(name="degreeCollegeName")
		private String degreeCollegeName;
		
		@Column(name="degreecoursenmae")
		private String degreeCourseName;
		
		@Column(name="degreeBranchName")
		private String degreeBranchName;
		
		@Column(name="degreeYearOfPassing")
		private int degreeYearOfPassing;
		
		@Column(name="degreecgpa")
		private double degreeCgpa;

		public int getEduId() {
			return eduId;
		}

		public void setEduId(int eduId) {
			this.eduId = eduId;
		}

		public Student getStudent() {
			return student;
		}

		public void setStudent(Student student) {
			this.student = student;
		}

		public String getSscSchoolName() {
			return sscSchoolName;
		}

		public void setSscSchoolName(String sscSchoolName) {
			this.sscSchoolName = sscSchoolName;
		}

		public double getSscCgpa() {
			return sscCgpa;
		}

		public void setSscCgpa(double sscCgpa) {
			this.sscCgpa = sscCgpa;
		}

		public int getSscYearOfPassing() {
			return sscYearOfPassing;
		}

		public void setSscYearOfPassing(int sscYearOfPassing) {
			this.sscYearOfPassing = sscYearOfPassing;
		}

		public String getHscCollegeName() {
			return hscCollegeName;
		}

		public void setHscCollegeName(String hscCollegeName) {
			this.hscCollegeName = hscCollegeName;
		}

		public String getHscStream() {
			return hscStream;
		}

		public void setHscStream(String hscStream) {
			this.hscStream = hscStream;
		}

		public double getHscCgpa() {
			return hscCgpa;
		}

		public void setHscCgpa(double hscCgpa) {
			this.hscCgpa = hscCgpa;
		}

		public int getHscYearOfPassing() {
			return hscYearOfPassing;
		}

		public void setHscYearOfPassing(int hscYearOfPassing) {
			this.hscYearOfPassing = hscYearOfPassing;
		}

		public String getDegreeCollegeName() {
			return degreeCollegeName;
		}

		public void setDegreeCollegeName(String degreeCollegeName) {
			this.degreeCollegeName = degreeCollegeName;
		}

		public String getDegreeCourseName() {
			return degreeCourseName;
		}

		public void setDegreeCourseName(String degreeCourseName) {
			this.degreeCourseName = degreeCourseName;
		}

		public String getDegreeBranchName() {
			return degreeBranchName;
		}

		public void setDegreeBranchName(String degreeBranchName) {
			this.degreeBranchName = degreeBranchName;
		}

		public int getDegreeYearOfPassing() {
			return degreeYearOfPassing;
		}

		public void setDegreeYearOfPassing(int degreeYearOfPassing) {
			this.degreeYearOfPassing = degreeYearOfPassing;
		}

		public double getDegreeCgpa() {
			return degreeCgpa;
		}

		public void setDegreeCgpa(double degreeCgpa) {
			this.degreeCgpa = degreeCgpa;
		}

	
		public EducationDetails() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		

		public EducationDetails(Student student, int eduId, String sscSchoolName, double sscCgpa, int sscYearOfPassing,
				String hscCollegeName, String hscStream, double hscCgpa, int hscYearOfPassing, String degreeCollegeName,
				String degreeCourseName, String degreeBranchName, int degreeYearOfPassing, double degreeCgpa) {
			super();
			this.student = student;
			this.eduId = eduId;
			this.sscSchoolName = sscSchoolName;
			this.sscCgpa = sscCgpa;
			this.sscYearOfPassing = sscYearOfPassing;
			this.hscCollegeName = hscCollegeName;
			this.hscStream = hscStream;
			this.hscCgpa = hscCgpa;
			this.hscYearOfPassing = hscYearOfPassing;
			this.degreeCollegeName = degreeCollegeName;
			this.degreeCourseName = degreeCourseName;
			this.degreeBranchName = degreeBranchName;
			this.degreeYearOfPassing = degreeYearOfPassing;
			this.degreeCgpa = degreeCgpa;
		}

		@Override
		public String toString() {
			return "EducationalDetails [eduId=" + eduId + ", student=" + student + ", sscSchoolName=" + sscSchoolName
					+ ", sscCgpa=" + sscCgpa + ", sscYearOfPassing=" + sscYearOfPassing + ", hscCollegeName="
					+ hscCollegeName + ", HscStream=" + hscStream + ", hscCgpa=" + hscCgpa + ", hscYearOfPassing="
					+ hscYearOfPassing + ", degreeCollegeName=" + degreeCollegeName + ", degreeCourseName="
					+ degreeCourseName + ", degreeBranchName=" + degreeBranchName + ", degreeYearOfPassing="
					+ degreeYearOfPassing + ", degreeCgpa=" + degreeCgpa + "]";
		}
		
		
	
}



