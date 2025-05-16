import React, { useState, useEffect } from "react";
import { getAirports, searchFlights } from "../../services/flights-api";
import { useNavigate } from "react-router-dom";
import { useFlightContext } from "../../context/FlightContext.jsx";
import './FlightSearch.css';
import Header from "../Header/Header.jsx";

export default function FlightSearch() {
  const [airports, setAirports] = useState({ origins: [], destinations: [] });
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [error,setError] = useState('');
  const { setFlights } = useFlightContext();
  const nav = useNavigate();

  useEffect(() => {
    getAirports().then(res => setAirports(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const selectedDate = new Date(departureDate);
    const formattedSelectedDate = selectedDate.toISOString().split('T')[0];
    //validating origin and destination
    if (origin && destination) {
        if(origin === destination)
        {
            setError('Origin and Destination cannot be the same');
        }
        
        else if(selectedDate < today)
        {
            setError('Departure Date must be in the future')
            
        }
        else
        { 
            try{
            searchFlights(origin, destination).then(res => {
                const flights = res.data;
               const filtered_flights = flights.filter((flight)=>
            {
                const flight_date = new Date(flight.departureDate).toISOString().split('T')[0];
                return formattedSelectedDate === flight_date
            })
            console.log(filtered_flights);
            console.log(flights);
            const newflights= [];
            if(filtered_flights.length>0)
            {
                flights.forEach((flight)=>
                {
                    if(flight._id !== filtered_flights[0]._id)
                        newflights.push(flight);
                })
                console.log(newflights);
                setFlights({
                    match : filtered_flights,
                    available : newflights});
                setError('');
                nav('/search'); 
            }
            else{
                setFlights({
                    available:flights
                });
                setError('');
                nav('/search');
            }
            
            })
            
           
        } 
      
      catch(error)
      {
        setError('Error fetching flights, Try Again')
      }
    }
  }

  
};

  return (
    <>
      
      <div className="flight-search-wrapper d-flex justify-content-center align-items-center">
        <div className="card p-4 shadow flight-search-card">
          <h3 className="mb-4 text-center text-primary">Search Flights</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Origin</label>
              <select className="form-select" value={origin} onChange={(e) => setOrigin(e.target.value)} required>
                <option value="">Select origin</option>
                {airports.origins.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Destination</label>
              <select className="form-select" value={destination} onChange={(e) => setDestination(e.target.value)} required>
                <option value="">Select destination</option>
                {airports.destinations.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Departure Date</label>
              <input type="date" className="form-control" value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} required />
            </div>

            <div className="mb-4">
              <label className="form-label">Number of Passengers</label>
              <input type="number" className="form-control" min="1" name="tickets" required />
            </div>

            {error && (
  <div className="alert alert-danger mt-3" role="alert">
    {error}
  </div>
)}
            <button type="submit" className="btn btn-primary w-100">Search Flights</button>
          </form>
        </div>
      </div>
    </>
  );
  }
