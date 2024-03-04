package com.placementportal.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AddTpo
{
  @Id
  private int tpoId;
  private String tpoName;
  private int tpocontact;
  private String collegeName;
  
public AddTpo(int tpoId, String tpoName, int tpocontact, String collegeName) {
	
	this.tpoId = tpoId;
	this.tpoName = tpoName;
	this.tpocontact = tpocontact;
	this.collegeName = collegeName;
}
public AddTpo() {
	
}
public int getTpoId() {
	return tpoId;
}
public void setTpoId(int tpoId) {
	this.tpoId = tpoId;
}
public String getTpoName() {
	return tpoName;
}
public void setTpoName(String tpoName) {
	this.tpoName = tpoName;
}
public int getTpocontact() {
	return tpocontact;
}
public void setTpocontact(int tpocontact) {
	this.tpocontact = tpocontact;
}
public String getCollegeName() {
	return collegeName;
}
public void setCollegeName(String collegeName) {
	this.collegeName = collegeName;
}
@Override
public String toString() {
	return "TpoProfileUpdate [tpoId=" + tpoId + ", tpoName=" + tpoName + ", tpocontact=" + tpocontact + ", collegeName="
			+ collegeName + "]";
}
  
  
  }
