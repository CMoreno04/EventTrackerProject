package com.skilldistillery.eventtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.User;

public interface UserRespository extends JpaRepository<User, Integer>{

	User findByUsername(String username);
	
} 