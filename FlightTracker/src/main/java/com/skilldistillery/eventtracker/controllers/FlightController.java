package com.skilldistillery.eventtracker.controllers;

import java.security.Principal;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin({ "*", "http://localhost:4255" })
public class FlightController {

	@Autowired
	private FlightService svc;

	@GetMapping("flights")
	public Set<Flight> index(Principal prin) {
		return svc.index(prin.getName());
	}

	@GetMapping("flights/{id}")
	private Flight getById(@PathVariable int id, HttpServletRequest req, HttpServletResponse resp, Principal prin) {
		try {
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			resp.setStatus(201);
			return svc.show(prin.getName(), id);
		} catch (Exception e) {
			resp.setStatus(404);
			return null;
		}
	}

	@PostMapping("flights")
	private Flight createTodo(@RequestBody Flight flight, HttpServletResponse resp, HttpServletRequest req, Principal prin) {

		Flight newTodo = svc.create(prin.getName(), flight);
		if (newTodo != null) {
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			resp.setStatus(201);
			return newTodo;
		} else {
			resp.setStatus(401);
			return null;
		}
	}

	@PutMapping("flights/{id}")
	private Flight updateTodo(@RequestBody Flight todo, @PathVariable int id, HttpServletResponse resp,
			HttpServletRequest req, Principal prin) {

		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			return svc.update(prin.getName(), id, todo);

		} catch (Exception e) {

			resp.setStatus(400);
			return null;
		}
	}

	@DeleteMapping("flights/{id}")
	private boolean deleteTodo(@PathVariable int id, HttpServletResponse resp, HttpServletRequest req, Principal prin) {

		try {
			resp.setStatus(201);
			StringBuffer url = req.getRequestURL();
			resp.addHeader("Location", url.toString());
			svc.destroy(prin.getName(), id);
			return true;
		} catch (Exception e) {
			resp.setStatus(400);

			return false;
		}
	}

}