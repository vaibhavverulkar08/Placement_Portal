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
public class Project {

	//Projects Details:
		// prn foregin key ref.
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "projectId", referencedColumnName = "studprn")
    private Student student;
	
		@Id
//	    @GeneratedValue(strategy = GenerationType.IDENTITY)
		@Column(name="projectId")
		private int projectId;
		
		@Column(name="projectTitle")
		private String projectTitle;
		
		@Column(name="projectDescription")
		private String projectDescription;
		
		@Column(name="projectTechnology")
		private String projectTechnology;
		
		@Column(name="projectDuration")
		private int projectDuration;

		public Student getStudent() {
			return student;
		}

		public void setStudent(Student student) {
			this.student = student;
		}

		public String getProjectTitle() {
			return projectTitle;
		}

		public void setProjectTitle(String projectTitle) {
			this.projectTitle = projectTitle;
		}

		public String getProjectDescription() {
			return projectDescription;
		}

		public void setProjectDescription(String projectDescription) {
			this.projectDescription = projectDescription;
		}

		public String getProjectTechnology() {
			return projectTechnology;
		}

		public void setProjectTechnology(String projectTechnology) {
			this.projectTechnology = projectTechnology;
		}

		public int getProjectId() {
			return projectId;
		}

		public void setProjectId(int projectId) {
			this.projectId = projectId;
		}

		public int getProjectDuration() {
			return projectDuration;
		}

		public void setProjectDuration(int projectDuration) {
			this.projectDuration = projectDuration;
		}

		public Project(Student student, String projectTitle, String projectDescription, String projectTechnology,
				int projectDuration) {
			super();
			this.student = student;
			this.projectTitle = projectTitle;
			this.projectDescription = projectDescription;
			this.projectTechnology = projectTechnology;
			this.projectDuration = projectDuration;
		}

		@Override
		public String toString() {
			return "Project [student=" + student + ", projectId=" + projectId + ", projectTitle=" + projectTitle
					+ ", projectDescription=" + projectDescription + ", projectTechnology=" + projectTechnology
					+ ", projectDuration=" + projectDuration + "]";
		}

		public Project() {
			super();
			// TODO Auto-generated constructor stub
		}
		
		//TODO:delete 
//		@Column(name="startdate")
//		private Date projectstartDate;
		
		
		
		
}
