import axios from 'axios'

export const API_BASE_URL = import.meta.env.VITE_API_URL;

//function to post a new passenger
export const createPassenger = async (passenger) => {
    const URL = '${API_BASE_URL}passengers'
    const response = await axios.post(URL, passenger)
    return response
}

//function to put flightid into passengers
export const addFlight = async(id,flightId)=>
    {
        const URL= `${API_BASE_URL}passengers/${id}/addflight`
        const response = await axios.put(URL,{flightId})
        return response
    }

//function to delete passenger using id
export const deletePassenger = async(id)=>
{
    const URL = `${API_BASE_URL}passengers/${id}`
    const response = await axios.delete(URL)
    return response;
}