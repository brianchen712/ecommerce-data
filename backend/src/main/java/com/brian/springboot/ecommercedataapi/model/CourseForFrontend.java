package com.brian.springboot.ecommercedataapi.model;

import java.text.DecimalFormat;

import com.brian.springboot.ecommercedataapi.entity.CourseType;

public class CourseForFrontend {

	private int id;

	private String image;

	private String name;

	private String description;

	private String price;

	private String discountPrice;

	private String courseTypeName;

	public CourseForFrontend() {

	}

	public CourseForFrontend(int id, String image, String name, String description, int price, int discountPrice,
			CourseType courseType) {
		this.id = id;
		this.image = image;
		this.name = name;
		this.description = description;
		this.price = toWestNumFormat(price);
		this.discountPrice = toWestNumFormat(discountPrice);
		this.courseTypeName = courseType.getName();
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

	public String getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = toWestNumFormat(price);
	}

	public String getDiscountPrice() {
		return discountPrice;
	}

	public void setDiscountPrice(int discountPrice) {
		this.discountPrice = toWestNumFormat(discountPrice);
	}

	public String toWestNumFormat(int num) {
		DecimalFormat df = new DecimalFormat("#,###");
		return df.format(num);
	}

	public String getCourseTypeName() {
		return courseTypeName;
	}

	public void setCourseTypeName(String courseTypeName) {
		this.courseTypeName = courseTypeName;
	}

}
