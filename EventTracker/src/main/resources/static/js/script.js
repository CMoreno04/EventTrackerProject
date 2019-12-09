window.addEventListener('load', function(e) {
	console.log("Document Loaded")
	init();
});

function init() {
	console.log("in init");

	document.form.submit.addEventListener('click', function(e) {
		console.log('in submit');

		event.preventDefault();
		var flightId = document.form.flightId.value;
		if (!isNaN(flightId) && flightId > 0) {
			getFlight(flightId);
		}
	})

	document.allFlights.flights.addEventListener('click', function(e) {
		console.log('in flights');

		event.preventDefault();

		getFlights();

	})

	document.createForm.create.addEventListener('click', function(e) {
		console.log('in create');

		e.preventDefault();

		getForm();

	})
}

function getForm() {
	var crForm = document.createElement('form');
	crForm.setAttribute('name', "newFlight");

	var airline = document.createElement('input');
	airline.setAttribute('type', "text");
	airline.setAttribute('name', "airline");
	airline.setAttribute('placeholder', "Airline");

	var flightNum = document.createElement('input');
	flightNum.setAttribute('type', "number");
	flightNum.setAttribute('name', "flightNum");
	flightNum.setAttribute('placeholder', "Flight Number");

	var depLoc = document.createElement('input');
	depLoc.setAttribute('type', "text");
	depLoc.setAttribute('name', "depLoc");
	depLoc.setAttribute('placeholder', "Departure Location");

	var arrLoc = document.createElement('input');
	arrLoc.setAttribute('type', "text");
	arrLoc.setAttribute('name', "arrLoc");
	arrLoc.setAttribute('placeholder', "Arrival Location");

	var depTim = document.createElement('input');
	depTim.setAttribute('type', "datetime-local");
	depTim.setAttribute('name', "depTim");
	depTim.setAttribute('placeholder', "Departure Time");

	var arrTim = document.createElement('input');
	arrTim.setAttribute('type', "datetime-local");
	arrTim.setAttribute('name', "arrTim");
	arrTim.setAttribute('placeholder', "Arrival Time");

	var numPass = document.createElement('input');
	numPass.setAttribute('type', "number");
	numPass.setAttribute('name', "numPass");
	numPass.setAttribute('placeholder', "# Passangers");

	var s = document.createElement('button'); // input element, Submit button
	s.setAttribute('type', "submit");
	s.setAttribute('value', "Submit");
	s.setAttribute('name', "crFlight");
	s.textContent = 'Submit';

	var br = document.createElement('br');

	crForm.appendChild(airline);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(flightNum);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(depLoc);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(arrLoc);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(depTim);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(arrTim);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(numPass);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(br);
	crForm.appendChild(s);

	var crDiv = document.getElementById('createFlight');

	crDiv.appendChild(crForm);

	document.body.appendChild(crDiv);

	s.addEventListener('click', function(e) {

		console.log('sending new flight');
		event.preventDefault();
		create();
	})
}

function getFlight(flightId) {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', '/api/flights/' + flightId, true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			displayFlight(JSON.parse(xhr.responseText));
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};

	xhr.send(null);
}
function getFlights() {

	var xhr = new XMLHttpRequest();

	xhr.open('GET', '/api/flights', true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var flights = JSON.parse(xhr.responseText)

			displayFlights(flights);

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};

	xhr.send(null);
}

function create() {

	var xhr = new XMLHttpRequest();
	xhr.open('POST', '/api/flights/', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify
	// JSON
	// request
	// body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				var data = JSON.parse(xhr.responseText);
				console.log(data);
			} else {
				console.log("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}
	};

	var flight = {
		id : 0,
		airline : document.getElementsByName('airline')[0].value,
		flightNumber : document.getElementsByName('flightNum')[0].value,
		departureLocation : document.getElementsByName('depLoc')[0].value,
		arrivalLocation : document.getElementsByName('arrLoc')[0].value,
		departureTime : document.getElementsByName('depTim')[0].value,
		arrivalTime : document.getElementsByName('arrTim')[0].value,
		numberPassengers : document.getElementsByName('numPass')[0].value,
		arrived : false
	};

	var userObjectJson = JSON.stringify(flight); // Convert JS object to JSON
	// string

	xhr.send(userObjectJson);

	console.log(flight);
}
function displayFlights(flights) {
	var dataDiv = document.getElementById('flightData');
	dataDiv.textContent = '';
	for (var i = 0; i < flights.length; i++) {

		var airline = document.createElement('h1');
		var flightNum = document.createElement('p');
		var depLocation = document.createElement('p');
		var arrLocation = document.createElement('p');
		var depTime = document.createElement('p');
		var arrTime = document.createElement('p');
		var flightDur = document.createElement('p');
		var numPassengers = document.createElement('p');
		var arrived = document.createElement('p');
		var d = document.createElement('button');
		d.textContent = 'Delete';

		var u = document.createElement('button');
		u.textContent = 'Update';

		airline.textContent = flights[i].airline;
		flightNum.textContent = 'Flight Number: ' + flights[i].flightNumber;
		depLocation.textContent = 'Departure Location: '
				+ flights[i].departureLocation;
		arrLocation.textContent = 'Arrival Location: '
				+ flights[i].arrivalLocation;
		depTime.textContent = 'Departure Date/Time: '
				+ flights[i].departureTime;
		arrTime.textContent = 'Arrival Date/Time: ' + flights[i].arrivalTime;
		flightDur.textContent = 'Flight Duration: ' + flights[i].flightDuration;
		numPassengers.textContent = 'Number Of Passangers: '
				+ flights[i].numberPassengers;

		var j = flights[i].id;
		if (flights[i].arrived == true) {
			arrived.textContent = 'Flight Status: Arrived';
		}

		else {
			arrived.textContent = 'Flight Status: On Time';
		}

		dataDiv.appendChild(airline);
		dataDiv.appendChild(flightNum);
		dataDiv.appendChild(depLocation);
		dataDiv.appendChild(arrLocation);
		dataDiv.appendChild(depTime);
		dataDiv.appendChild(arrTime);
		dataDiv.appendChild(flightDur);
		dataDiv.appendChild(numPassengers);
		dataDiv.appendChild(arrived);
		dataDiv.appendChild(d);
		dataDiv.appendChild(u);

		d.addEventListener('click', function(e) {
			console.log('in delete');
			deleteFlight(j)
		})

		u.addEventListener('click', function(e) {
			console.log('in update');

			updateFlight(flights[i], j);
		})
	}

}
function displayFlight(flight) {
	var dataDiv = document.getElementById('flightData');
	dataDiv.textContent = '';

	var airline = document.createElement('h1');
	var flightNum = document.createElement('p');
	var depLocation = document.createElement('p');
	var arrLocation = document.createElement('p');
	var depTime = document.createElement('p');
	var arrTime = document.createElement('p');
	var flightDur = document.createElement('p');
	var numPassengers = document.createElement('p');
	var arrived = document.createElement('p');

	var del = document.createElement('button');
	del.textContent = 'Delete';

	var update = document.createElement('button');
	update.textContent = 'Update';

	airline.textContent = flight.airline;
	flightNum.textContent = 'Flight Number: ' + flight.flightNumber;
	depLocation.textContent = 'Departure Location: ' + flight.departureLocation;
	arrLocation.textContent = 'Arrival Location: ' + flight.arrivalLocation;
	depTime.textContent = 'Departure Date/Time: ' + flight.departureTime;
	arrTime.textContent = 'Arrival Date/Time: ' + flight.arrivalTime;
	flightDur.textContent = 'Flight Duration: ' + flight.flightDuration;
	numPassengers.textContent = 'Number Of Passangers: '
			+ flight.numberPassengers;

	if (flight.arrived == true) {
		arrived.textContent = 'Flight Status: Arrived';
	}

	else {
		arrived.textContent = 'Flight Status: On Time';
	}

	dataDiv.appendChild(airline);
	dataDiv.appendChild(flightNum);
	dataDiv.appendChild(depLocation);
	dataDiv.appendChild(arrLocation);
	dataDiv.appendChild(depTime);
	dataDiv.appendChild(arrTime);
	dataDiv.appendChild(flightDur);
	dataDiv.appendChild(numPassengers);
	dataDiv.appendChild(arrived);
	dataDiv.appendChild(del);
	dataDiv.appendChild(update);

	del.addEventListener('click', function(e) {
		console.log('in delete');
		console.log(flight.id);
		deleteFlight(flight.id)
	})

	update.addEventListener('click', function(e) {
		console.log('in update');

		updateFlight(flight, flight.id);
	})

}

function deleteFlight(id) {

	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', '/api/flights/' + id, true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var f = JSON.parse(xhr.responseText)

			console.log(f)

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
		}

	};

	xhr.send(null);

}

function updateFlight(flight, id) {
	console.log(flight)
	var upDiv = document.createElement('updateFlight');

	var upForm = document.createElement('form');
	upForm.setAttribute('name', "updateFlight");

	var airlin = document.createElement('input');
	airlin.setAttribute('type', "text");
	airlin.setAttribute('name', "airlin");
	airlin.setAttribute('placeholder', flight.airline);
	airlin.setAttribute('value', flight.airline);

	var flightNu = document.createElement('input');
	flightNu.setAttribute('type', "number");
	flightNu.setAttribute('name', "flightNu");
	flightNu.setAttribute('placeholder', flight.flightNumber);
	flightNu.setAttribute('value', flight.flightNumber);

	var depLo = document.createElement('input');
	depLo.setAttribute('type', "text");
	depLo.setAttribute('name', "depLo");
	depLo.setAttribute('placeholder', flight.departureLocation);
	depLo.setAttribute('value', flight.departureLocation);

	var arrLo = document.createElement('input');
	arrLo.setAttribute('type', "text");
	arrLo.setAttribute('name', "arrLo");
	arrLo.setAttribute('placeholder', flight.arrivalLocation);
	arrLo.setAttribute('value', flight.arrivalLocation);

	var depTi = document.createElement('input');
	depTi.setAttribute('type', "datetime-local");
	depTi.setAttribute('name', "depTi");
	depTi.setAttribute('placeholder', flight.departureTime);
	depTi.setAttribute('value', flight.departureTime);

	var arrTi = document.createElement('input');
	arrTi.setAttribute('type', "datetime-local");
	arrTi.setAttribute('name', "arrTi");
	arrTi.setAttribute('placeholder', flight.arrivalTime);
	arrTi.setAttribute('value', flight.arrivalTime);

	var numPas = document.createElement('input');
	numPas.setAttribute('type', "number");
	numPas.setAttribute('name', "numPas");
	numPas.setAttribute('placeholder', flight.numberPassengers);
	numPas.setAttribute('value', flight.numberPassengers);

	var c = document.createElement('button'); // input element, Submit button
	c.setAttribute('type', "submit");
	c.setAttribute('name', 'upFlightBtn');
	c.textContent = 'Update';

	var br = document.createElement('br');

	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(airlin);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(flightNu);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(depLo);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(arrLo);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(depTi);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(arrTi);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(numPas);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(br);
	upForm.appendChild(c);

	upDiv.appendChild(upForm);

	var datDiv = document.getElementById('flightData');

	datDiv.appendChild(upDiv);

	c.addEventListener('click', function(e) {

		var upFlight = {
			id : 0,
			airline : document.getElementsByName('airlin')[0].value,
			flightNumber : document.getElementsByName('flightNu')[0].value,
			departureLocation : document.getElementsByName('depLo')[0].value,
			arrivalLocation : document.getElementsByName('arrLo')[0].value,
			departureTime : document.getElementsByName('depTi')[0].value,
			arrivalTime : document.getElementsByName('arrTi')[0].value,
			numberPassengers : document.getElementsByName('numPas')[0].value,
			arrived : false
		};

		console.log('updating flight');
		console.log(upFlight);
		event.preventDefault();
		update(upFlight, id);
	})
}
function update(flight, id) {
	console.log('in func update');
	console.log(flight);

	var xh = new XMLHttpRequest();

	xh.open('PUT', 'http://localhost:8088/api/flights/' + id, true);

	xh.setRequestHeader("Content-type", "application/json");

	xh.onreadystatechange = function() {

		if (xh.readyState === 4 && xh.status < 400) {
			var f = JSON.parse(xh.responseText)

			console.log('updateds')
			console.log(f)

		}

		if (xh.readyState === 4 && xh.status >= 400) {
			console.error(xh.status + ': ' + xh.responseText);
		}

	};

	var userObj = JSON.stringify(flight);
	xh.send(userObj);

}
