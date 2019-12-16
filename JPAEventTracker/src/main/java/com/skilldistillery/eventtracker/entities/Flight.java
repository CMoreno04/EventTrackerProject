package com.skilldistillery.eventtracker.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "flight")
public class Flight {

	// F I E L D S

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	private String airline;

	@Column(name = "flight_number")
	private int flightNumber;

	@Column(name = "departure_location")
	private String departureLocation;

	@Column(name = "arrival_location")
	private String arrivalLocation;

	@Column(name = "departure_time")
	private LocalDateTime departureTime;

	@Column(name = "arrival_time")
	private LocalDateTime arrivalTime;

	@ManyToOne
	@JoinColumn(name = "user_id")
	@JsonIgnore
	private User user;

	@Column(name = "number_passangers")
	private int numberPassengers;

	private boolean arrived;

	// C O N S T R U C T O R S

	public Flight() {
		super();
	}

	public Flight(String airline, int flightNumber, String departureLocation, String arrivalLocation,
			LocalDateTime departureTime, LocalDateTime arrivalTime, User user, int numberPassengers, boolean arrived) {
		super();
		this.airline = airline;
		this.flightNumber = flightNumber;
		this.departureLocation = departureLocation;
		this.arrivalLocation = arrivalLocation;
		this.departureTime = departureTime;
		this.arrivalTime = arrivalTime;
		this.user = user;
		this.numberPassengers = numberPassengers;
		this.arrived = arrived;
	}

	// G E T T E R S A N D S E T T E R S

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getAirline() {
		return airline;
	}

	public void setAirline(String airline) {
		this.airline = airline;
	}

	public int getFlightNumber() {
		return flightNumber;
	}

	public void setFlightNumber(int flightNumber) {
		this.flightNumber = flightNumber;
	}

	public String getDepartureLocation() {
		return departureLocation;
	}

	public void setDepartureLocation(String departureLocation) {
		this.departureLocation = departureLocation;
	}

	public String getArrivalLocation() {
		return arrivalLocation;
	}

	public void setArrivalLocation(String arrivalLocation) {
		this.arrivalLocation = arrivalLocation;
	}

	public LocalDateTime getDepartureTime() {
		return departureTime;
	}

	public void setDepartureTime(LocalDateTime departureTime) {
		this.departureTime = departureTime;
	}

	public LocalDateTime getArrivalTime() {
		return arrivalTime;
	}

	public void setArrivalTime(LocalDateTime arrivalTime) {
		this.arrivalTime = arrivalTime;
	}

	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getNumberPassengers() {
		return numberPassengers;
	}

	public void setNumberPassengers(int numberPassengers) {
		this.numberPassengers = numberPassengers;
	}

	public boolean isArrived() {
		return arrived;
	}

	public void setArrived(boolean arrived) {
		this.arrived = arrived;
	}
	

	// T O S T R I N G

	@Override
	public String toString() {
		return "Flight [id=" + id + ", airline=" + airline + ", flightNumber=" + flightNumber + ", departureLocation="
				+ departureLocation + ", arrivalLocation=" + arrivalLocation + ", departureTime=" + departureTime
				+ ", arrivalTime=" + arrivalTime + ", user=" + user + ", numberPassengers=" + numberPassengers
				+ ", arrived=" + arrived + "]";
	}

	// H A S H A N D E Q U A L S

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((airline == null) ? 0 : airline.hashCode());
		result = prime * result + ((arrivalLocation == null) ? 0 : arrivalLocation.hashCode());
		result = prime * result + ((arrivalTime == null) ? 0 : arrivalTime.hashCode());
		result = prime * result + (arrived ? 1231 : 1237);
		result = prime * result + ((departureLocation == null) ? 0 : departureLocation.hashCode());
		result = prime * result + ((departureTime == null) ? 0 : departureTime.hashCode());
		result = prime * result + flightNumber;
		result = prime * result + id;
		result = prime * result + numberPassengers;
		result = prime * result + ((user == null) ? 0 : user.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Flight other = (Flight) obj;
		if (airline == null) {
			if (other.airline != null)
				return false;
		} else if (!airline.equals(other.airline))
			return false;
		if (arrivalLocation == null) {
			if (other.arrivalLocation != null)
				return false;
		} else if (!arrivalLocation.equals(other.arrivalLocation))
			return false;
		if (arrivalTime == null) {
			if (other.arrivalTime != null)
				return false;
		} else if (!arrivalTime.equals(other.arrivalTime))
			return false;
		if (arrived != other.arrived)
			return false;
		if (departureLocation == null) {
			if (other.departureLocation != null)
				return false;
		} else if (!departureLocation.equals(other.departureLocation))
			return false;
		if (departureTime == null) {
			if (other.departureTime != null)
				return false;
		} else if (!departureTime.equals(other.departureTime))
			return false;
		if (flightNumber != other.flightNumber)
			return false;
		if (id != other.id)
			return false;
		if (numberPassengers != other.numberPassengers)
			return false;
		if (user == null) {
			if (other.user != null)
				return false;
		} else if (!user.equals(other.user))
			return false;
		return true;
	}

}
