import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { FlightProvider } from './context/FlightContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <FlightProvider>
        <App />
      </FlightProvider>
     
    </Router>
  </StrictMode>,
)
