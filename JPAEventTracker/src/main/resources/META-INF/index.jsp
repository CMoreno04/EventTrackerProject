<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index</title>
</head>
<body>
	<form:form action="flights" method="POST" modelattribute="flight">
Airline: <form:input type="text" name="airline" required="required" />
Flight Number: <form:input type="number" name="FlightNumber"
			required="r equired" />
Departure Location: <form:input type="number" name="DepartureLocation"
			required="required" />
Arrival Location: <form:input type="number" name="ArrivalLocation"
			required="required" />
Departure Date/Time: <form:input type="datetime-local"
			" name="DepartureTime" required="required" />
Arrival Date/Time: <form:input type="datetime-local"
			" name="ArrivalTime" required="required" />
		<form:button type="submit" />
	</form:form>
	<c:forEach items="${flights}" var="flight">
	${flight}
	<hr>
	</c:forEach>
</body>
</html>