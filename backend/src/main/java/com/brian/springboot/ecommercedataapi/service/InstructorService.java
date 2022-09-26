package com.brian.springboot.ecommercedataapi.service;

import java.util.List;

import com.brian.springboot.ecommercedataapi.entity.Instructor;

public interface InstructorService {

	public List<Instructor> showAllInstructor();

	public Instructor showInstructor(int id) throws Exception;

	public void insertInstructor(Instructor instructor);

	public void updateInstructor(int id, String fullName, String email, String education, String experience)
			throws Exception;

	public void deleteInstructor(int id) throws Exception;

}
