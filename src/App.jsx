import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage/Homepage.jsx'
import Flights from './pages/Flights/Flights.jsx'
import Passenger from './pages/Passengers/Passenger.jsx'
import Confirm from './pages/Confirm/Confirm.jsx'
import { FlightProvider } from './context/FlightContext.jsx'

import './App.css'


function App() {
 


  return (
    <>
    <div className='homepage-bg'>
    
      <Routes>
        <Route path ='/' element={<Homepage/>}/>
        <Route path ='/search' element={<Flights/>}/>
        <Route path = '/passengers' element = {<Passenger/>}/>
        <Route path = '/confirmation' element ={<Confirm/>}/>
      </Routes>
      
    </div>
    </>
  )
}

export default App
