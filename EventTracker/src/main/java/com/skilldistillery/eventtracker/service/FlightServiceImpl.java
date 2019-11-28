package com.skilldistillery.eventtracker.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Flight;
import com.skilldistillery.eventtracker.repository.FlightRepository;

@Service
public class FlightServiceImpl implements FlightService {

	@Autowired
	private FlightRepository repo;
	
	@Override
	public List<Flight> findAllFlights() {
		return repo.findAll();
	}

	@Override
	public Flight findFlightById(Integer id) {
		return repo.findById(id).get();
	}

}
