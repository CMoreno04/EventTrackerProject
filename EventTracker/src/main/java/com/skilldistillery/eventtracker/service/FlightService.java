package com.skilldistillery.eventtracker.service;

import java.util.List;

import com.skilldistillery.eventtracker.entities.Flight;

public interface FlightService {

	public List<Flight> findAllFlights();

	public Flight findFlightById(Integer id);

	public Flight createFlight(Flight flight);
	
	public boolean deleteFlight(int id);
	
	public Flight updateFlight(int id, Flight flight);

}
