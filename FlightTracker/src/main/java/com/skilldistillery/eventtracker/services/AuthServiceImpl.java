package com.skilldistillery.eventtracker.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.User;
import com.skilldistillery.eventtracker.repositories.UserRespository;

@Service
public class AuthServiceImpl implements AuthService {

	@Autowired
	private UserRespository repo;

	@Autowired
	private PasswordEncoder encoder;

	@Override
	public User register(User user) {

//		encrypt and set the password for the User.
		user.setPassword(encoder.encode(user.getPassword()));
//		set the enabled field of the object to true.
		user.setEnabled(true);
//		set the role field of the object to "standard".
		user.setRole("standard");
//		saveAndFlush the user using the UserRepo.
//		return the User object.
		return repo.saveAndFlush(user);
	}

}
