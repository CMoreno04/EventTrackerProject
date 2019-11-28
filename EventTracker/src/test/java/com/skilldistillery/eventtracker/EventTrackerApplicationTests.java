package com.skilldistillery.eventtracker;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

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

}
