package com.brian.springboot.ecommercedataapi.model;

import com.brian.springboot.ecommercedataapi.entity.CourseType;
import com.brian.springboot.ecommercedataapi.entity.Instructor;

public class CourseForForm {

	private int id;

	private String image;

	private String name;

	private String description;

	private int price;

	private int discountPrice;

	private int courseTypeId;

	private int instructorId;

	public CourseForForm() {

	}

	public CourseForForm(int id, String image, String name, String description, int price, int discountPrice,
			CourseType courseType, Instructor instructor) {
		this.id = id;
		this.image = image;
		this.name = name;
		this.description = description;
		this.price = price;
		this.discountPrice = discountPrice;
		this.courseTypeId = courseType.getId();
		this.instructorId = instructor.getId();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getDiscountPrice() {
		return discountPrice;
	}

	public void setDiscountPrice(int discountPrice) {
		this.discountPrice = discountPrice;
	}

	public int getCourseTypeId() {
		return courseTypeId;
	}

	public void setCourseTypeId(int courseTypeId) {
		this.courseTypeId = courseTypeId;
	}

	public int getInstructorId() {
		return instructorId;
	}

	public void setInstructorId(int instructorId) {
		this.instructorId = instructorId;
	}

}
