import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPassenger } from '../../services/passengers-api-jsx';
import { useFlightContext } from '../../context/FlightContext';
import './Passenger.css';
import { addpassenger,getPassengers,removepassenger } from '../../services/flights-api';
import { addFlight ,deletePassenger} from '../../services/passengers-api-jsx';
import Header from '../../components/Header/Header';

 

export default function Passenger()
{
    const [passengers,setPassengers] = useState([]);
    const {selectedFlight} = useFlightContext();
    const [FormData,setFormData] = useState({
        fname : '',
        lname : '',
        email:'',
        age:''

    })
    function handleChange(e){
        setFormData({
            ...FormData,
            [e.target.name] : e.target.value
        })
    }

    //useEffect to display passengers
   console.log("selected Flight",selectedFlight._id);
    const AddPassenger = async (e)=>
    {  
        try{
        e.preventDefault();
        const passenger = {
            firstName: FormData.fname ,
            lastName: FormData.lname,
            email:FormData.email,
            age:FormData.age}
            
            //Post request to add a new passenger to the passengers model
            createPassenger(passenger).then((res)=>{
              console.log(res.data)
              const passengerId = res.data._id;
             //Add the passenger info to the flight - PUT Request to update passengers info
            addpassenger(selectedFlight._id,passengerId).then((res)=>
            {
                console.log(res.data);
            })
            //add to passengers state
            setPassengers([...passengers,res.data]);

            setFormData({fname:'',lname:'',email:'',age:''});
            
             
        })
        }catch(err){
            console.log('Booking error')
        }
    }


//Function to delete passenger

    const handleDelete = async (passengerId)=>
    {
        try{
           const flight = removepassenger(selectedFlight._id,passengerId).then((res)=>
            {
                console.log('Deleted Passsenger');
        

            deletePassenger(passengerId);

            setPassengers(passengers.filter(p => p._id !== passengerId));
            console.log(passengers);
            });
        }
        catch(error)
        {
            console.log('Booking error')
        }
    }
    useEffect(() => {
        
        if (selectedFlight?.passengers) {
          getPassengers(selectedFlight._id).then((res)=>{
            console.log(res.data);
          
        
          setPassengers(res.data.passengers);
          console.log(res.data.passengers)
        })
      }}, [selectedFlight]);
    
    const nav = useNavigate();
    return (
        <>
          <Header />
          <div className="container mt-4">
            <h2 className="text-primary mb-4">Flight Details</h2>
            <ul className="list-group mb-4">
              <li className="list-group-item"><strong>Flight Number:</strong> {selectedFlight.flightNumber}</li>
              <li className="list-group-item"><strong>Origin:</strong> {selectedFlight.origin}</li>
              <li className="list-group-item"><strong>Destination:</strong> {selectedFlight.destination}</li>
              <li className="list-group-item"><strong>Departure Date:</strong> {selectedFlight.departureDate}</li>
              <li className="list-group-item"><strong>Departure Time:</strong> {selectedFlight.departureTime}</li>
              <li className="list-group-item"><strong>Arrival Time:</strong> {selectedFlight.arrivalTime}</li>
              <li className="list-group-item"><strong>Price:</strong> ${selectedFlight.price}</li>
              <li className="list-group-item"><strong>Status:</strong> {selectedFlight.status}</li>
            </ul>
    
            <h4 className="text-success mb-3">Add a Passenger</h4>
            <form className="row g-3 passenger-form" onSubmit={AddPassenger}>
              <div className="col-md-6">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" name="fname" value={FormData.fname} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" name="lname" value={FormData.lname} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={FormData.email} onChange={handleChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" name="age" value={FormData.age} onChange={handleChange} required />
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-success mt-3">Add Passenger</button>
              </div>
            </form>
    
            <h4 className="mt-5">Passengers List</h4>
            <ul className="list-group mb-4">
              {passengers.map((p, index) => (
                <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    {p.firstName} {p.lastName} — {p.email} (Age: {p.age})
                  </div>
                  <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(p._id)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
    
            {passengers.length > 0 && (
              <div className="text-center">
                <button className="btn btn-success" onClick={()=> {nav('/confirmation')}}>Confirm Booking</button>
              </div>
            )}
          </div>
        </>
      );
    }
    