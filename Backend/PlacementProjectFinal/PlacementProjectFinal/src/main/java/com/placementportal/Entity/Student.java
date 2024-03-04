package com.placementportal.Entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "student")
public class Student {

    @Id
    @Column(name = "studprn")
    private int studprn;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private PersonalDetails personalDetails;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private Skills skills;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private Internship_Experience internship_experience;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private Project project;

    @OneToOne(mappedBy = "student", cascade = CascadeType.ALL)
    private EducationDetails educationalDetail;

	public int getStudprn() {
		return studprn;
	}

	public void setStudprn(int studprn) {
		this.studprn = studprn;
	}

	public PersonalDetails getPersonalDetails() {
		return personalDetails;
	}

	public void setPersonalDetails(PersonalDetails personalDetails) {
		this.personalDetails = personalDetails;
	}

	public Skills getSkills() {
		return skills;
	}

	public void setSkills(Skills skills) {
		this.skills = skills;
	}

	public Internship_Experience getInternship_experience() {
		return internship_experience;
	}

	public void setInternship_experience(Internship_Experience internship_experience) {
		this.internship_experience = internship_experience;
	}

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public EducationDetails getEducationalDetail() {
		return educationalDetail;
	}

	public void setEducationalDetail(EducationDetails educationalDetail) {
		this.educationalDetail = educationalDetail;
	}

	public Student(int studprn, PersonalDetails personalDetails, Skills skills,
			Internship_Experience internship_experience, Project project, EducationDetails educationalDetail) {
		super();
		this.studprn = studprn;
		this.personalDetails = personalDetails;
		this.skills = skills;
		this.internship_experience = internship_experience;
		this.project = project;
		this.educationalDetail = educationalDetail;
	}

	public Student() {
		super();
	}

	@Override
	public String toString() {
		return "Student [studprn=" + studprn + ", personalDetails=" + personalDetails + ", skills=" + skills
				+ ", internship_experience=" + internship_experience + ", project=" + project + ", educationalDetail="
				+ educationalDetail + "]";
	}
    
}




