package com.skilldistillery.eventtracker;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.temporal.ChronoUnit;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.eventtracker.entities.Flight;
import com.skilldistillery.eventtracker.service.FlightService;

@SpringBootTest
@RunWith(SpringRunner.class)
class EventTrackerApplicationTests {

	@Autowired
	private FlightService serv;

	@Test
	@DisplayName("get list of flight")
	void getListOfFlight() {
		assertEquals("United", serv.findAllFlights().get(0).getAirline());
	}

	@Test
	@DisplayName("creates flight")
	public void createFlight() {

		LocalDateTime departureTime = LocalDateTime.of(2019, 12, 01, 02, 30);

		LocalDateTime arrivalTime = LocalDateTime.of(2019, 12, 01, 06, 00);

		Long hours = ChronoUnit.HOURS.between(departureTime, arrivalTime);

		Long minute = ChronoUnit.MINUTES.between(departureTime, arrivalTime);

		Long realMinutes = minute - ((minute / 60) * 60);

		Flight flight = new Flight(0, "South West", 787, "Portland", "Denver", departureTime, arrivalTime, 35);
		
		flight.setFlightDuration(LocalTime.of(hours.intValue(), realMinutes.intValue()));

		assertEquals("Denver", serv.createFlight(flight).getArrivalLocation());

	}

}
