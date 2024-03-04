package com.placementportal.Entity;

import java.util.Arrays;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class Video {

	@Id
    @GeneratedValue
    private int prnNo;
    
    private String name;
    
    @Column(length = 100000)
    @Lob
    private byte[] data;

	public Video(int prnNo, String name, byte[] data) {
		super();
		this.prnNo = prnNo;
		this.name = name;
		this.data = data;
	}

	public Video() {
		// TODO Auto-generated constructor stub
	}

	public int getPrnNo() {
		return prnNo;
	}

	public void setPrnNo(int prnNo) {
		this.prnNo = prnNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	@Override
	public String toString() {
		return "Video [prnNo=" + prnNo + ", name=" + name + ", data=" + Arrays.toString(data) + "]";
	}
    
}
