import React from 'react'
import { useDispatch } from "react-redux";
import { removeReservation } from "../redux/slices/reservationSlice";
import { addCustomer } from "../redux/slices/customerSlice";

function ReservationCard({ name, index }) {

    const dispatch = useDispatch();

    return (
        <div
            className="reservation-card-container"
            onClick={() => {
                dispatch(removeReservation(index))
                dispatch(addCustomer({
                    id: Date.now(),
                    name: name,
                    food: []
                }))
            }}
        >
            <p>{name}</p>
        </div>
    )
}

export default ReservationCard