import axios from 'axios'

export const API_BASE_URL = import.meta.env.VITE_API_URL;

//Get Airports
export const getAirports = async () => {
    const URL = `${API_BASE_URL}flights/airports`
    const response = await axios.get(URL)
    return response
}

//Fetch flights
export const searchFlights = async(origin,destination) => {
    const URL = `${API_BASE_URL}flights/search?origin=${origin}&destination=${destination}`
    const response = await axios.get(URL)
    return response
}
//Adding passengerdetails to flight
export const addpassenger = async(id,passengerId)=>
{
    const URL= `${API_BASE_URL}flights/${id}/addpassenger`
    const response = await axios.put(URL,{passengerId})
    return response
}

//Get passengers using flightid
export const getPassengers = async (id)=>
{
    const URL = `${API_BASE_URL}flights/${id}`
    const response = await axios.get(URL)
    return response;
}

//remove passenger details from flight
export const removepassenger = async(flightId,passengerId) =>
{
    const URL = `${API_BASE_URL}flights/${flightId}/passengers/${passengerId}`
    const response = await axios.delete(URL)
    return response;
}