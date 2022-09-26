package com.brian.springboot.ecommercedataapi.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.brian.springboot.ecommercedataapi.entity.Course;

public interface CourseService {

	public List<Course> showCourseByInstructor(int id);

	public Course showCourseById(int id) throws Exception;

	public void insertCourse(int instructorId, String name, MultipartFile image, String description, int courseTypeId,
			int price, int discountPrice) throws Exception;

	public void updateCourse(int courseId, String name, String description, int courseTypeId, int price,
			int discountPrice) throws Exception;

	public void deleteCourse(int id) throws Exception;

}
