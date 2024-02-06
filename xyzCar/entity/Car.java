package com.asstwo.xyzCar.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Car {
	@Id
	@Column(name = "car_id")
	private Integer carID;
	@Column(name = "car_brand")
	private String carBrand;
	@Column(name = "car_price")
	private Double carPrice;
	@Column(name = "car_color")
	private String carColor;
	public Integer getCarID() {
		return carID;
	}
	public void setCarID(Integer carID) {
		this.carID = carID;
	}
	public String getCarBrand() {
		return carBrand;
	}
	public void setCarBrand(String carBrand) {
		this.carBrand = carBrand;
	}
	public Double getCarPrice() {
		return carPrice;
	}
	public void setCarPrice(Double carPrice) {
		this.carPrice = carPrice;
	}
	public String getCarColor() {
		return carColor;
	}
	public void setCarColor(String carColor) {
		this.carColor = carColor;
	}
	public Car() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Car(Integer carID, String carBrand, Double carPrice, String carColor) {
		super();
		this.carID = carID;
		this.carBrand = carBrand;
		this.carPrice = carPrice;
		this.carColor = carColor;
	}
	
	
}
