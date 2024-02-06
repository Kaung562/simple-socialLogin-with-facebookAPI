package com.asstwo.xyzCar.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asstwo.xyzCar.entity.User;

public interface UserRepo extends JpaRepository <User, Long>{
	User findByUsername(String username);
  
}
