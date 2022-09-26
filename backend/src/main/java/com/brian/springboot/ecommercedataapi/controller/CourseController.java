package com.brian.springboot.ecommercedataapi.controller;

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

import com.brian.springboot.ecommercedataapi.entity.Course;
import com.brian.springboot.ecommercedataapi.model.CourseForForm;
import com.brian.springboot.ecommercedataapi.model.CourseForFrontend;
import com.brian.springboot.ecommercedataapi.service.CourseService;

@RestController
@RequestMapping("/api")
public class CourseController {

	@Autowired
	private CourseService service;

	@GetMapping("/course/i/{id}")
	public List<CourseForFrontend> showCourseByInstructor(@PathVariable("id") int id) {
		List<Course> courses = service.showCourseByInstructor(id);
		List<CourseForFrontend> courseForFronteds = courses.stream().map(c -> new CourseForFrontend(c.getId(),
				c.getImage(), c.getName(), c.getDescription(), c.getPrice(), c.getDiscountPrice(), c.getCourseType()))
				.toList();
		return courseForFronteds;
	}

	@GetMapping("/course/c/{id}")
	public CourseForForm showCourseById(@PathVariable("id") int id) throws Exception {
		Course course = service.showCourseById(id);
		CourseForForm courseForForm = new CourseForForm(course.getId(), course.getImage(), course.getName(),
				course.getDescription(), course.getPrice(), course.getDiscountPrice(), course.getCourseType(),
				course.getInstructor());

		return courseForForm;
	}

	@PostMapping("/course")
	public void insertCourse(@RequestParam("instructorId") int instructorId, @RequestParam("name") String name,
			@RequestParam("image") MultipartFile image, @RequestParam("description") String description,
			@RequestParam("courseTypeId") int courseTypeId, @RequestParam("price") int price,
			@RequestParam("discountPrice") int discountPrice) throws Exception {

		service.insertCourse(instructorId, name, image, description, courseTypeId, price, discountPrice);
	}

	@PutMapping("/course")
	public void updateCourse(@RequestParam("courseId") int courseId, @RequestParam("name") String name,
			@RequestParam("description") String description, @RequestParam("courseTypeId") int courseTypeId,
			@RequestParam("price") int price, @RequestParam("discountPrice") int discountPrice) throws Exception {

		service.updateCourse(courseId, name, description, courseTypeId, price, discountPrice);
	}

	@DeleteMapping("/course/{id}")
	public void deleteCourse(@PathVariable("id") int id) throws Exception {
		service.deleteCourse(id);
	}
}
