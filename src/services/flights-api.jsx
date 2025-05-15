import axios from 'axios'


//Get Airports
export const getAirports = async () => {
    const URL = 'http://localhost:3000/flights/airports'
    const response = await axios.get(URL)
    return response
}

//Fetch flights
export const searchFlights = async(origin,destination) => {
    const URL = `http://localhost:3000/flights/search?origin=${origin}&destination=${destination}`
    const response = await axios.get(URL)
    return response
}
//Adding passengerdetails to flight
export const addpassenger = async(id,passengerId)=>
{
    const URL= `http://localhost:3000/flights/${id}/addpassenger`
    const response = await axios.put(URL,{passengerId})
    return response
}

//Get passengers using flightid
export const getPassengers = async (id)=>
{
    const URL = `http://localhost:3000/flights/${id}`
    const response = await axios.get(URL)
    return response;
}

//remove passenger details from flight
export const removepassenger = async(flightId,passengerId) =>
{
    const URL = `http://localhost:3000/flights/${flightId}/passengers/${passengerId}`
    const response = await axios.delete(URL)
    return response;
}