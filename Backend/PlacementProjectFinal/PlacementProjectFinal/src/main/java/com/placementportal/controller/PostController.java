 package com.placementportal.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.placementportal.service.CreateJobService;
import com.placementportal.Entity.CreateJob;

@RestController
@CrossOrigin("*")
public class PostController {

	@Autowired
	CreateJobService postService;
	
//	List<Post> lst = new ArrayList<>();
	@GetMapping("Post")
	public List<CreateJob> getPosts(){
		return postService.showAllPosts();
	}
	
	@GetMapping("/Post/{id}")
	public CreateJob getPost(@PathVariable int id)
	{
		return postService.getPost(id);
	}
	
	@PostMapping("/addPost")
	public void addPost(@RequestBody CreateJob post)
	{
		postService.addPost(post);
	}
	
	@PutMapping("/Post/{id}")
	public void updatePost(@RequestBody CreateJob post,@PathVariable int id)
	{
		postService.updatePost(post,id);
	}
	
	@DeleteMapping("/Post/{id}")
	public void deletePost(@PathVariable int id)
	{
		postService.delete(id);
	}
}
