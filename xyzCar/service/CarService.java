package com.asstwo.xyzCar.service;

import java.util.List;

import com.asstwo.xyzCar.entity.Car;


public interface CarService {

	public void addCar(Car car);
	public List<Car> showCar();
}
