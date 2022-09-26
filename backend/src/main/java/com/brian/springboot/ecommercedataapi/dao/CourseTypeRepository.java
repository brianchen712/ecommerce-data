package com.brian.springboot.ecommercedataapi.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brian.springboot.ecommercedataapi.entity.CourseType;

@Repository
public interface CourseTypeRepository extends JpaRepository<CourseType, Integer> {

}
