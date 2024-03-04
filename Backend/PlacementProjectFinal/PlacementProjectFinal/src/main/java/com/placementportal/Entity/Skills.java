package com.placementportal.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Skills {
	@OneToOne
	@JoinColumn(name = "skillId", referencedColumnName = "studprn")
	private Student student;
	
	@Id 
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int skillId;

	@Column(name = "techSkillName")
	private String technicalSkills;

	@Column(name = "noTechSkillName")
	private String nonTechnicalSkills;

	
	public String getTechnicalSkills() {
		return technicalSkills;
	}

	public void setTechnicalSkills(String technicalSkills) {
		this.technicalSkills = technicalSkills;
	}

	public String getNonTechnicalSkills() {
		return nonTechnicalSkills;
	}

	public void setNonTechnicalSkills(String nonTechnicalSkills) {
		this.nonTechnicalSkills = nonTechnicalSkills;
	}

	public Skills(Student student, String technicalSkills, String nonTechnicalSkills) {
		super();
		this.technicalSkills = technicalSkills;
		this.nonTechnicalSkills = nonTechnicalSkills;
	}

	@Override
	public String toString() {
		return "technicalSkills=" + technicalSkills + ", nonTechnicalSkills="
				+ nonTechnicalSkills + "]";
	}

	public Skills() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}



