package com.skilldistillery.eventtracker.services;

import java.time.LocalDateTime;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.eventtracker.entities.Flight;
import com.skilldistillery.eventtracker.entities.User;
import com.skilldistillery.eventtracker.repositories.FlightRepository;
import com.skilldistillery.eventtracker.repositories.UserRespository;

@Service
public class FlightServiceImpl implements FlightService {

	@Autowired
	private FlightRepository repo;

	@Autowired
	private UserRespository uRepo;

	@Override
	public Set<Flight> index(String username) {
		return repo.findByUser_Username(username);
	}

	@Override
	public Flight show(String username, Integer id) {
		Flight flight = repo.findById(id).get();

		if (flight.getUser().getUsername().equals(username)) {
			return flight;
		}

		else {
			return null;
		}
	}

	@Override
	public Flight create(String username, Flight flight) {
		User user = uRepo.findByUsername(username);

		if (user != null) {
			flight.setUser(user);
			return repo.saveAndFlush(flight);
		} else {
			return null;
		}
	}

	@Override
	public boolean destroy(String username, int id) {
		Flight flight = repo.findById((Integer) id).get();

		if (flight.getUser().getUsername().equals(username)) {
			repo.delete(flight);
			return true;
		}

		else {

			return false;
		}
	}

	@Override
	public Flight update(String username, int id, Flight flight) {

		Flight oldFlight = repo.findByUser_UsernameAndId(username, id);

		if (oldFlight != null) {

			oldFlight.setAirline(flight.getAirline());
			oldFlight.setFlightNumber(flight.getFlightNumber());
			oldFlight.setDepartureLocation(flight.getDepartureLocation());
			oldFlight.setArrivalLocation(flight.getArrivalLocation());
			oldFlight.setNumberPassengers(flight.getNumberPassengers());
			oldFlight.setDepartureTime(flight.getDepartureTime());
			oldFlight.setArrivalTime(flight.getArrivalTime());

			if (oldFlight.getArrivalTime().isBefore(LocalDateTime.now())) {
				oldFlight.setArrived(true);
			}

			return repo.saveAndFlush(oldFlight);
		} else {
			return null;
		}
	}

}