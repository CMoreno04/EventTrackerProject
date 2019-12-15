package com.skilldistillery.eventtracker.services;

import java.util.Set;

import com.skilldistillery.eventtracker.entities.Flight;

public interface FlightService {

	public Set<Flight> index(String username);

	public Flight show(String username, Integer id);

	public Flight create(String username, Flight flight);

	public boolean destroy(String username, int id);

	public Flight update(String username, int id, Flight flight);

}