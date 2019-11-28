package com.skilldistillery.eventtracker.service;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Flight;

public interface FlightService {
	
	public List<Flight> findAllFlights();
	
	public Flight findFlightById(Integer id);
}
