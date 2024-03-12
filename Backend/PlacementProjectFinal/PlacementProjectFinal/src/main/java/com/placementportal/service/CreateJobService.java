package com.placementportal.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.placementportal.repository.CreateJobRepo;
import com.placementportal.Entity.CreateJob;


@Service
public class CreateJobService {

	@Autowired
	CreateJobRepo createjobRepo;
	
	public List<CreateJob> showAllPosts()
	{
		List<CreateJob> lst = createjobRepo.findAll();
		return lst;
	}
	
	public CreateJob getPost(int id)
	{
		CreateJob post = createjobRepo.findById(id).get();
		return post;
	}
	
	public void addPost(CreateJob post)
	{
		createjobRepo.save(post);
	}
	
	public void updatePost(CreateJob p,int id)
	{
		CreateJob oldPost = createjobRepo.findById(id).get();
		oldPost=p;
		createjobRepo.save(oldPost);
	}
	
	public void delete(int id)
	{
		createjobRepo.deleteById(id);
	}
}
