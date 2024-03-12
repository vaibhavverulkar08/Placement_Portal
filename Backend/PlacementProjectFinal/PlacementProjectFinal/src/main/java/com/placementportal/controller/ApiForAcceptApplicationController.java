package com.placementportal.controller;
import com.placementportal.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/jobposts")
public class ApiForAcceptApplicationController {

	@Autowired
    private ApiForAcceptApplicationService jobPostService;

    @PutMapping("/{id}")
    public void acceptJobPost(@PathVariable Long id) {
        jobPostService.acceptJobPost(id);
    }
}