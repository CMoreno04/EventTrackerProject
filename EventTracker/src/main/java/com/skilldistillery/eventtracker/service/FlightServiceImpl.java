package com.skilldistillery.eventtracker.service;

import java.time.LocalDateTime;
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

		LocalDateTime tempDateTime = LocalDateTime.from( fromDateTime );

		Long years = tempDateTime.until( toDateTime, ChronoUnit.YEARS);
		tempDateTime = tempDateTime.plusYears( years );

		Long months = tempDateTime.until( toDateTime, ChronoUnit.MONTHS);
		tempDateTime = tempDateTime.plusMonths( months );

		Long days = tempDateTime.until( toDateTime, ChronoUnit.DAYS);
		tempDateTime = tempDateTime.plusDays( days );


		Long hours = tempDateTime.until( toDateTime, ChronoUnit.HOURS);
		tempDateTime = tempDateTime.plusHours( hours );

		Long minutes = tempDateTime.until( toDateTime, ChronoUnit.MINUTES);
		tempDateTime = tempDateTime.plusMinutes( minutes );

		Long seconds = tempDateTime.until( toDateTime, ChronoUnit.SECONDS);
		
		flight.setFlightDuration(LocalDateTime.of(years.intValue(),months.intValue(),days.intValue(),hours.intValue(),minutes.intValue(),seconds.intValue()));

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
		
		if(oldFlight.getArrivalTime().isBefore(LocalDateTime.now())) {
			oldFlight.setArrived(true);
		}
		
		return repo.saveAndFlush(oldFlight);
	}

}
