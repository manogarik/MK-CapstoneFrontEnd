

import { useFlightContext } from "../../context/FlightContext.jsx";
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from 'react';
import './Flights.css';
import Header from "../../components/Header/Header.jsx";

export default function Flights() {
  const { flights, selectedFlight, setSelectedFlight } = useFlightContext();
  const [selectedFlightIndex, setSelectedFlightIndex] = useState(null);
  const nav = useNavigate();

  const matchingFlights = flights?.match|| [];
  const availableFlights = flights?.available || [];

  console.log(matchingFlights);

  useEffect(() => {
    if (selectedFlight) {
      console.log("selectedFlight updated:", selectedFlight);
    }
  }, [selectedFlight]);

  const handleSubmit = () => {
    const flight =
      (selectedFlightIndex !== null
        ? matchingFlights[selectedFlightIndex] || availableFlights[selectedFlightIndex - matchingFlights.length]
        : null);

    if (flight) {
      setSelectedFlight(flight);
      nav('/passengers');
    } else {
      console.log('No selected flight');
    }
  };

  let displayIndex = 0;

  return (
    <>
      <Header />
      <div className="flights-wrapper container mt-4">
        <h4 className="mb-3 text-primary text-center">Select a Flight</h4>

        {matchingFlights.length === 0 && (
          <div className="alert alert-warning text-center">
            No flights match your selected date. Showing other available flights below.
          </div>
        )}

        {matchingFlights.length > 0 && (
          <div className="mb-4">
            <h5 className="text-success">Flights on your selected date:</h5>
            {matchingFlights.map((flight, index) => (
              <div className="card mb-3 p-3 shadow-sm flight-card" key={index}>
                <label className="form-check-label d-flex align-items-start">
                  <input
                    type="radio"
                    className="form-check-input me-3"
                    name="selectedFlight"
                    value={displayIndex}
                    checked={selectedFlightIndex === displayIndex}
                    onChange={() => setSelectedFlightIndex(displayIndex)}
                  />
                  <div>
                    <strong>Flight #{flight.flightNumber}</strong>
                    <p className="mb-1"><strong>Origin:</strong> {flight.origin}</p>
                    <p className="mb-1"><strong>Destination:</strong> {flight.destination}</p>
                    <p className="mb-1"><strong>Date:</strong> {flight.departureDate}</p>
                    <p className="mb-1"><strong>Status:</strong> {flight.status}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>
        )}

        {availableFlights.length > 0 && (
          <div>
            <h5 className="text-secondary">Other flights on this route:</h5>
            {availableFlights.map((flight, index) => {
              const actualIndex = index + matchingFlights.length;
              return (
                <div className="card mb-3 p-3 shadow-sm flight-card" key={actualIndex}>
                  <label className="form-check-label d-flex align-items-start">
                    <input
                      type="radio"
                      className="form-check-input me-3"
                      name="selectedFlight"
                      value={actualIndex}
                      checked={selectedFlightIndex === actualIndex}
                      onChange={() => setSelectedFlightIndex(actualIndex)}
                    />
                    <div>
                      <strong>Flight #{flight.flightNumber}</strong>
                      <p className="mb-1"><strong>Origin:</strong> {flight.origin}</p>
                      <p className="mb-1"><strong>Destination:</strong> {flight.destination}</p>
                      <p className="mb-1"><strong>Date:</strong> {flight.departureDate}</p>
                      <p className="mb-1"><strong>Status:</strong> {flight.status}</p>
                    </div>
                  </label>
                </div>
              );
            })}
          </div>
        )}

        {selectedFlightIndex !== null && (
          <div className="text-center mt-4">
            <button className="btn btn-success" onClick={handleSubmit}>
              Book Flight
            </button>
          </div>
        )}
      </div>
    </>
  );
}
