package com.brian.springboot.ecommercedataapi.service;

import java.sql.Timestamp;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.brian.springboot.ecommercedataapi.dao.CourseRepository;
import com.brian.springboot.ecommercedataapi.dao.CourseTypeRepository;
import com.brian.springboot.ecommercedataapi.dao.InstructorRepository;
import com.brian.springboot.ecommercedataapi.entity.Course;
import com.brian.springboot.ecommercedataapi.entity.CourseType;
import com.brian.springboot.ecommercedataapi.entity.Instructor;

@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	private InstructorRepository instructorRepository;

	@Autowired
	private CourseTypeRepository courseTypeRepository;

	@Autowired
	private CourseRepository courseRepository;

	@Override
	@Transactional
	public List<Course> showCourseByInstructor(int id) {
		return courseRepository.findByInstructorId(id);
	}

	@Override
	@Transactional
	public Course showCourseById(int id) throws Exception {
		Optional<Course> optCourse = courseRepository.findById(id);
		if (!optCourse.isPresent()) {
			throw new Exception("課程不存在");
		}
		return optCourse.get();
	}

	@Override
	@Transactional
	public void insertCourse(int instructorId, String name, MultipartFile image, String description, int courseTypeId,
			int price, int discountPrice) throws Exception {
		Optional<Course> optCourse = courseRepository.findByName(name);
		if (optCourse.isPresent()) {
			throw new Exception("課程已存在");
		}

		Course course = new Course();
		course.setName(name);
		course.setImage(Base64.getEncoder().encodeToString(image.getBytes()));
		course.setDescription(description);
		course.setPrice(price);
		course.setDiscountPrice(discountPrice);
		course.setCreateDate(new Timestamp(System.currentTimeMillis()));

		Optional<Instructor> optInstructor = instructorRepository.findById(instructorId);
		if (!optInstructor.isPresent()) {
			throw new Exception("講師不存在");
		}

		Optional<CourseType> optCourseType = courseTypeRepository.findById(courseTypeId);
		if (!optCourseType.isPresent()) {
			throw new Exception("課程類別不存在");
		}

		course.setInstructor(optInstructor.get());
		course.setCourseType(optCourseType.get());

		courseRepository.save(course);

	}

	@Override
	@Transactional
	public void updateCourse(int courseId, String name, String description, int courseTypeId, int price,
			int discountPrice) throws Exception {
		Optional<Course> optCourse = courseRepository.findById(courseId);
		if (!optCourse.isPresent()) {
			throw new Exception("課程不存在");
		}

		Course course = optCourse.get();
		course.setName(name);
		course.setDescription(description);
		course.setPrice(price);
		course.setDiscountPrice(discountPrice);

		Optional<CourseType> optCourseType = courseTypeRepository.findById(courseTypeId);
		if (!optCourseType.isPresent()) {
			throw new Exception("課程類別不存在");
		}

		course.setCourseType(optCourseType.get());

		courseRepository.save(course);

	}

	@Override
	@Transactional
	public void deleteCourse(int id) throws Exception {
		Optional<Course> optCourse = courseRepository.findById(id);
		if (!optCourse.isPresent()) {
			throw new Exception("課程不存在");
		}

		courseRepository.deleteById(id);
	}

}
