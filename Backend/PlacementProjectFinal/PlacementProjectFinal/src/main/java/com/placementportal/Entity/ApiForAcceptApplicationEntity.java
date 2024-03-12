package com.placementportal.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ApiForAcceptApplicationEntity {
	@Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String status; // Can be "accepted" or "rejected"
    
    // Getters and setters
    
    public ApiForAcceptApplicationEntity(Long id, String title, String status) {
		super();
		this.id = id;
		this.title = title;
		this.status = status;
	}
	public ApiForAcceptApplicationEntity() {
		super();
	}
    
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "ApiForAcceptApplicationEntity [id=" + id + ", title=" + title + ", status=" + status + "]";
	}
	
}