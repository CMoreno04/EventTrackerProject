package com.skilldistillery.eventtracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.eventtracker.entities.Flight;
import com.skilldistillery.eventtracker.services.FlightService;

@RestController
@RequestMapping("api")
public class FlightController {

	@Autowired
	private FlightService serv;

	@GetMapping("flights")
	public List<Flight> getAllFlights() {
		return serv.findAllFlights();
	}

	@GetMapping("flights/{id}")
	public Flight getFlightById(@PathVariable int id, HttpServletRequest req, HttpServletResponse resp) {
		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			return serv.findFlightById(id);
		} catch (Exception e) {
			resp.setStatus(400);
			return null;
		}
	}

	@PostMapping("flights")
	private Flight createFlight(@RequestBody Flight flight, HttpServletRequest req, HttpServletResponse resp) {
		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			return serv.createFlight(flight);
		} catch (Exception e) {
			resp.setStatus(400);
			return null;
		}
	}

	@PutMapping("flights/{id}")
	private Flight updateFlight(@PathVariable int id, @RequestBody Flight flight, HttpServletRequest req,
			HttpServletResponse resp) {
		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			return serv.updateFlight(id, flight);
		} catch (Exception e) {
			resp.setStatus(400);
			return null;
		}
	}

	@DeleteMapping("flights/{id}")
	private boolean deleteFlight(@PathVariable int id, HttpServletRequest req, HttpServletResponse resp) {
		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			return serv.deleteFlight(id);
		} catch (Exception e) {
			resp.setStatus(400);
			return false;
		}
	}
}