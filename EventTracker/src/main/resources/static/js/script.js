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
	
	variv = document.getElementsByName('createFlight')[0];

	var flight = {
			 id: 0,
			    airline: document.iv.airline.value,
			    flightNumber: document.iv.newFlight.flightNum.value,
			    departureLocation: document.iv.newFlight.depLoc.value,
			    arrivalLocation: document.iv.newFlight.arrLoc.value,
			    departureTime: document.iv.newFlight.depTim.value,
			    arrivalTime: document.iv.newFlight.arrTim.value,
			    numberPassengers: document.iv.newFlight.numPass.value,
			    arrived: false
	};
	
	var userObjectJson = JSON.stringify(flight); // Convert JS object to JSON
	// string

	xhr.send(userObjectJson);

	console.log(flight);
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

}