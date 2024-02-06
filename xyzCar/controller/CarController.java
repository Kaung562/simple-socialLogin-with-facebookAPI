package com.asstwo.xyzCar.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asstwo.xyzCar.entity.Car;
import com.asstwo.xyzCar.service.CarService;

@RestController
@RequestMapping("/api/private")
public class CarController {

	@Autowired
	CarService carser;
	
	@GetMapping (value = "/showCar" )
	public List<Car> getCarData(){
		List<Car> carData = carser.showCar();
		return carData;
	}
	
	@PostMapping(value ="/addCar")
	public String addCar(@RequestBody Car car) {
	
	carser.addCar(car);
	return "Data Added";
	}
}
