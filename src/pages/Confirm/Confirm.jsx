import {React, useEffect,useState} from 'react'
import { useFlightContext } from '../../context/FlightContext';
import { getPassengers } from '../../services/flights-api';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './Confirm.css'
export default function Confirm(){

    const {selectedFlight} = useFlightContext(); 
    const [passengers,setPassengers]=useState([]);
    const nav = useNavigate();
   useEffect(() => {
    window.scrollTo(0, 0);
           
           if (selectedFlight?._id) {
             getPassengers(selectedFlight._id).then((res)=>{
               console.log(res.data);
             
           
             setPassengers(res.data.passengers);
             console.log(res.data.passengers)
           })
         }}, [selectedFlight]);
       
         if (!selectedFlight) return <p className="text-center mt-5">Loading booking confirmation...</p>;

         return (
          <>
          <Header/>
           <div className="modal-overlay">
             <div className="modal-content p-4">
               <h3 className="text-success mb-3">✅ Booking Confirmed!</h3>
               <h5 className="mb-2">Flight Details</h5>
               <ul className="list-unstyled">
                 <li><strong>Flight #:</strong> {selectedFlight.flightNumber}</li>
                 <li><strong>Origin:</strong> {selectedFlight.origin}</li>
                 <li><strong>Destination:</strong> {selectedFlight.destination}</li>
                 <li><strong>Departure Date:</strong> {selectedFlight.departureDate}</li>
                 
               </ul>
       
               <h5 className="mt-4">Passengers List</h5>
               <ul className="list-group">
                 {passengers.map((p, index) => (
                   <li key={index} className="list-group-item">
                     {p.firstName} {p.lastName} — {p.email} (Age: {p.age})
                   </li>
                 ))}
               </ul>
              </div>
            
             
                {/* //BUTTON TO RETURN TO HOME PAGE */}
                
             </div>
           </>
         );
       }