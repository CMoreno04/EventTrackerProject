package com.skilldistillery.eventtracker.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.eventtracker.entities.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {
	Set<Flight> findByUser_Username(String username);

	Flight findByUser_UsernameAndId(String username, int id);
}