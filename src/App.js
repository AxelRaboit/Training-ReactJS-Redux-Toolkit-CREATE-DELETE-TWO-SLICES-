import React, { useState } from "react";
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import ReservationCard from './components/ReservationCard';
import CustomerCard from "./components/CustomerCard";
import { addReservation } from "./redux/slices/reservationSlice";

function App() {

  const dispatch = useDispatch();

  const [reservationNameInput, setReservationNameInput] = useState("");

  const reservations = useSelector(
    (state) => state.reservations.value
  );

  const customers = useSelector(
    (state) => state.customer.value
  );

  const handleAddReservations = () => {
    if(!reservationNameInput) return;
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard key={index} name={name} index={index}/>
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
              value={reservationNameInput}
              onChange={(e) => setReservationNameInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => {
            return (
              <CustomerCard 
              id={customer.id}
              name={customer.name}
              food={customer.food}
              key={customer.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;