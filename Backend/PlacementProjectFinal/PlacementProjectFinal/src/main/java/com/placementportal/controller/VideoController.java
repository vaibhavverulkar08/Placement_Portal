package com.placementportal.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.placementportal.Entity.Video;
import com.placementportal.service.VideoService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/videos")
public class VideoController {
	 @Autowired
	    private VideoService videoService;

	    @PostMapping("/upload")
	    public ResponseEntity<String> uploadVideo(@RequestParam("file") MultipartFile file) {
	        try {
	            videoService.uploadVideo(file);
	            return ResponseEntity.ok("Video uploaded successfully.");
	        } catch (IOException e) {
	            e.printStackTrace();
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload video.");
	        }
	    }
	    @GetMapping("/{prnNo}")
	    public ResponseEntity<byte[]> getVideo(@PathVariable int prnNo) {
	        Video video = videoService.getVideo(prnNo);
	        if (video != null) {
	            return ResponseEntity.status(HttpStatus.OK)
	                    .header("Content-Disposition", "attachment; filename=\"" + video.getName() + "\"")
	                    .body(video.getData());
	        } else {
	            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
	        }
	    }
}
