# ✈️ FlyMate - FrontEnd
FlyMate is a flight ticket booking application developed using MERN Stack (MongoDB, Express js, React js, Node js).

### Overview
This backend application provides RESTful APIs for the Reservation System, enabling users to:

+ Search for flights by entering origin, destination, and departure date
+ View a list of matching flights
+ Select a flight to view more details
+ Fill out a form to add passenger information
+ Perform CRUD operations on passenger data

### :hammer_and_wrench: Backend Codebase (Node.js + Express)
[https://github.com/manogarik/Capstone-BackEnd]

### Technologies used
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

### 📁 Project Structure

```
frontend/
├── public/
|       |--Flight.jpg
├── src/
│   ├── components/
│   │   ├── Header
|   |   |     |__Header.jsx
|   |   |     |__Header.css
|   |   |     
│   │   ├── FlightSearchForm
│   │         |__FlightSearch.jsx
|   |         |__FlightSearch.css
│   │   
│   ├── pages/
│   │   ├── Homepage
|   |   |     |__Homepage.jsx
|   |   |     |__Homepage.css
│   │   |
|   |   |__ Flights
|   |   |     |__Flights.jsx
|   |   |     |__Flights.css
|   |   |
|   |   |__ Passengers
|   |   |     |__Passenger.jsx
|   |   |     |__Passenger.css
|   |   |
|   |   |__ Confirm
|   |          |__Confirm.jsx
|   |         |__Confirm.css
|   |
|   |
│   ├── App.jsx
│   └── index.mjs
|
├── package.json
└── README.md
```

#### ⚙️ Setup Instructions

1. **Navigate to the directory**
   ```
   cd Capstone-FrontEnd
   ```
2. **Install Dependencies**
   ```
   npm install 
   ```
3. **Start the server**
   ```
   npm run dev
   ```

#### 🔐 Future Work
##### Add User Authentication


+ User Authentication helps users to create personal accounts to manage their bookings.
+ Protect sensitive data like booking history and passenger details

##### Filter flights by price
+ We can have a filter option to compare the price of the flights.
