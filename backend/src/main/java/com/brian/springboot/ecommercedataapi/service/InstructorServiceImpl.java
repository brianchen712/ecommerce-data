package com.brian.springboot.ecommercedataapi.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brian.springboot.ecommercedataapi.dao.InstructorRepository;
import com.brian.springboot.ecommercedataapi.entity.Instructor;

@Service
public class InstructorServiceImpl implements InstructorService {

	@Autowired
	private InstructorRepository instructorRepository;

	@Override
	@Transactional
	public List<Instructor> showAllInstructor() {
		List<Instructor> instructors = instructorRepository.findAll();
		return instructors;
	}

	@Override
	@Transactional
	public Instructor showInstructor(int id) throws Exception {
		Optional<Instructor> optInst = instructorRepository.findById(id);
		if (!optInst.isPresent()) {
			throw new Exception("講師不存在");
		}
		return optInst.get();
	}

	@Override
	@Transactional
	public void insertInstructor(Instructor instructor) {
		instructorRepository.save(instructor);
	}

	@Override
	@Transactional
	public void updateInstructor(int id, String fullName, String email, String education, String experience)
			throws Exception {
		Optional<Instructor> optInst = instructorRepository.findById(id);
		if (!optInst.isPresent()) {
			throw new Exception("講師不存在");
		}
		Instructor instructor = optInst.get();
		instructor.setId(id);
		instructor.setFullName(fullName);
		instructor.setEmail(email);
		instructor.setEducation(education);
		instructor.setExperience(experience);
		instructorRepository.save(instructor);
	}

	@Override
	@Transactional
	public void deleteInstructor(int id) throws Exception {
		Optional<Instructor> optInst = instructorRepository.findById(id);
		if (!optInst.isPresent()) {
			throw new Exception("講師不存在");
		}

		instructorRepository.deleteById(id);
	}

}
