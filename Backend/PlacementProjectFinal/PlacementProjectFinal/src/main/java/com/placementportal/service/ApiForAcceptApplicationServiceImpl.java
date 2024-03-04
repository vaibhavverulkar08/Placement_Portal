package com.placementportal.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placementportal.Entity.ApiForAcceptApplicationEntity;
import com.placementportal.repository.ApiForAcceptApplicationRepo;

@Service
public class ApiForAcceptApplicationServiceImpl implements ApiForAcceptApplicationService {

	
	 @Autowired
	    private ApiForAcceptApplicationRepo jobPostRepository;

	    @Override
	    public void acceptJobPost(Long id) {
	    	ApiForAcceptApplicationEntity jobPost = jobPostRepository.findById(id).orElse(null);
	        if (jobPost != null) {
	            jobPost.setStatus("accepted");
	            jobPostRepository.save(jobPost);
	        } else {
	        }
	    }

}
