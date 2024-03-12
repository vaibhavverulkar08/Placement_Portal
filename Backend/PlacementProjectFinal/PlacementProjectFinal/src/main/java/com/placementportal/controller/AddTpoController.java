package com.placementportal.controller;

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

import com.placementportal.service.AddTpoService;
import com.placementportal.Entity.AddTpo;

@RestController
@CrossOrigin("*")
public class AddTpoController {
	
	@Autowired
	AddTpoService addtposervice;
	
//	List<Post> lst = new ArrayList<>();
	
	// sequencing must be exact same as the sequece of entity class, for testing in postman
	// as well as posting by frontend
	@GetMapping("/AllTpo")
	public List<AddTpo> getPosts(){
		return addtposervice.showAllPosts();
	}
	
	@GetMapping("/Tpo/{id}")
	public AddTpo getPost(@PathVariable int id)
	{
		return addtposervice.getPost(id);
	}
	
	@PostMapping("/AddTpo")
	public void addPost(@RequestBody AddTpo post)
	{
		addtposervice.addPost(post);
	}
	
	@PutMapping("/AddTpo/{id}")
	public void updatePost(@RequestBody AddTpo post,@PathVariable int id)
	{
		addtposervice.updatePost(post,id);
	}
	
	@DeleteMapping("/Tpo/{id}")
	public void deletePost(@PathVariable int id)
	{
		addtposervice.delete(id);
	}
}
