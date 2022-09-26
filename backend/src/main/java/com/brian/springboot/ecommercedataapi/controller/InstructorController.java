package com.brian.springboot.ecommercedataapi.controller;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.brian.springboot.ecommercedataapi.entity.Instructor;
import com.brian.springboot.ecommercedataapi.model.InstructorForFrontend;
import com.brian.springboot.ecommercedataapi.service.InstructorService;

@RestController
@RequestMapping("/api")
public class InstructorController {

	@Autowired
	private InstructorService service;

	@GetMapping("/instructor")
	public List<InstructorForFrontend> showAllInstructor() {
		List<Instructor> instructors = service.showAllInstructor();
		List<InstructorForFrontend> instructorForFronteds = instructors.stream()
				.map(i -> new InstructorForFrontend(i.getId(), i.getFullName(), i.getEmail(), i.getImage(),
						i.getEducation(), i.getExperience()))
				.toList();
		return instructorForFronteds;
	}

	@GetMapping("/instructor/{id}")
	public Instructor showInstructor(@PathVariable("id") int id) throws Exception {
		Instructor instructor = service.showInstructor(id);
		return instructor;
	}

	@PostMapping("/instructor")
	public void insertInstructor(@RequestParam("fullName") String fullName, @RequestParam("email") String email,
			@RequestParam("education") String education, @RequestParam("experience") String experience,
			@RequestParam("image") MultipartFile image) throws IOException {
		Instructor instructor = new Instructor();
		instructor.setFullName(fullName);
		instructor.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
		instructor.setEmail(email);
		instructor.setEducation(education);
		instructor.setExperience(experience);
		instructor.setCreateDate(new Timestamp(System.currentTimeMillis()));
		service.insertInstructor(instructor);
	}

	@PutMapping("/instructor")
	public void updateInstructor(@RequestParam("id") int id, @RequestParam("fullName") String fullName,
			@RequestParam("email") String email, @RequestParam("education") String education,
			@RequestParam("experience") String experience) throws Exception {
		service.updateInstructor(id, fullName, email, education, experience);
	}

	@DeleteMapping("/instructor/{id}")
	public void deleteInstructor(@PathVariable("id") int id) throws Exception {
		service.deleteInstructor(id);
	}
}
