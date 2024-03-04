package com.placementportal.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;

@Entity
public class CreateJob {
	@Id
	private int hrId;
	private String companyname;
	private String jobTitle;
	private int jobId;
	private String jobDesc;
	private String jobRequirements;
	public int getHrId() {
		return hrId;
	}
	public void setHrId(int hrId) {
		this.hrId = hrId;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getJobTitle() {
		return jobTitle;
	}
	public void setJobTitle(String jobTitle) {
		this.jobTitle = jobTitle;
	}
	public int getJobId() {
		return jobId;
	}
	public void setJobId(int jobId) {
		this.jobId = jobId;
	}
	public String getJobDesc() {
		return jobDesc;
	}
	public void setJobDesc(String jobDesc) {
		this.jobDesc = jobDesc;
	}
	public String getJobRequirements() {
		return jobRequirements;
	}
	public void setJobRequirements(String jobRequirements) {
		this.jobRequirements = jobRequirements;
	}
	
	public CreateJob(int hrId, String companyname, String jobTitle, int jobId, String jobDesc, String jobRequirements) {
		super();
		this.hrId = hrId;
		this.companyname = companyname;
		this.jobTitle = jobTitle;
		this.jobId = jobId;
		this.jobDesc = jobDesc;
		this.jobRequirements = jobRequirements;
	}
	
	public CreateJob() {
		super();
	}
	
	@Override
	public String toString() {
		return "Post [hrId=" + hrId + ", companyname=" + companyname + ", jobTitle=" + jobTitle + ", jobId=" + jobId
				+ ", jobDesc=" + jobDesc + ", jobRequirements=" + jobRequirements + "]";
	}
	
	
	
}