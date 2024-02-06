package com.asstwo.xyzCar.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.asstwo.xyzCar.entity.Car;
import com.asstwo.xyzCar.repo.CarRepo;



@Service("CarService")
public class CarServiceImp implements CarService{
	
	@Autowired
	CarRepo repocar;

	@Override
	public void addCar(Car car) {
		repocar.save(car);
		
	}

	@Override
	public List<Car> showCar() {
		return repocar.findAll();
	}

}
