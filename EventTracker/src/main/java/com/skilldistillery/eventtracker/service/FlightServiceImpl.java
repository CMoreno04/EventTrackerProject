package com.skilldistillery.eventtracker.service;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;
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

	@Override
	public Flight createFlight(Flight flight) {

		LocalDateTime fromDateTime = flight.getDepartureTime();
		LocalDateTime toDateTime = flight.getArrivalTime();

		Long minutes = fromDateTime.until(toDateTime, ChronoUnit.MINUTES);

		Long Days = minutes - (minutes / (24 * 60));

		Long hours = minutes / 60;

		minutes = minutes - (hours * 60);

		flight.setFlightDuration(LocalTime.of(hours.intValue(), minutes.intValue(), 0));

		return repo.saveAndFlush(flight);
	}

	@Override
	public boolean deleteFlight(int id) {
		try {
			repo.deleteById(id);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public Flight updateFlight(int id, Flight flight) {

		Flight oldFlight = repo.findById(id).get();

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
	}

}
