package com.placementportal.service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.placementportal.Entity.Video;
import com.placementportal.repository.VideoRepo;


@Service
public class VideoService {
	@Autowired
    private VideoRepo videoRepo;

    public void uploadVideo(MultipartFile file) throws IOException {
        Video video = new Video();
        video.setName(file.getOriginalFilename());
        video.setData(file.getBytes());
        videoRepo.save(video);
    }
   
    public Video getVideo(int prnNo) {
        return videoRepo.findById(prnNo).orElse(null);
    }

	
	}

