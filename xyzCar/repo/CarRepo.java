package com.asstwo.xyzCar.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asstwo.xyzCar.entity.Car;

public interface CarRepo extends JpaRepository <Car, Integer>{

}
