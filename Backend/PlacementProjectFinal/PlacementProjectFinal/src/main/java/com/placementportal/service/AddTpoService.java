package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.Entity.AddTpo;
import com.placementportal.repository.AddTpoRepo;

@Service
public class AddTpoService {

	@Autowired
	AddTpoRepo addtpoRepo;
	
	public List<AddTpo> showAllPosts()
	{
		List<AddTpo> lst = addtpoRepo.findAll();
		return lst;
	}
	
	public AddTpo getPost(int id)
	{
		AddTpo post = addtpoRepo.findById(id).get();
		return post;
	}
	
	public void addPost(AddTpo tpoProfileUpdate)
	{
		addtpoRepo.save(tpoProfileUpdate);
	}
	
	public void updatePost(AddTpo t,int id)
	{
		AddTpo oldPost = addtpoRepo.findById(id).get();
		oldPost=t;
		addtpoRepo.save(oldPost);
	}
	
	public void delete(int id)
	{
		addtpoRepo.deleteById(id);
	}
}
