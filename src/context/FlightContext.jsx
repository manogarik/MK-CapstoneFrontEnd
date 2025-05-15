import { createContext, useState, useContext } from 'react';

// Create the context
const FlightContext = createContext();


export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState({match :[],available:[]});
  const [selectedFlight,setSelectedFlight] = useState(null)

  return (
    <FlightContext.Provider value={{ flights, setFlights ,selectedFlight,setSelectedFlight}}>
      {children}
    </FlightContext.Provider>
  );
};


export const useFlightContext = () => useContext(FlightContext);