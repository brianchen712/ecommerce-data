package com.brian.springboot.ecommercedataapi.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.brian.springboot.ecommercedataapi.entity.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
	@Query(value = "select * from course where instructor_id = ?1 ", nativeQuery = true)
	List<Course> findByInstructorId(int instructor_id);

	@Query(value = "select * from course where name = ?1 ", nativeQuery = true)
	Optional<Course> findByName(String name);
}
