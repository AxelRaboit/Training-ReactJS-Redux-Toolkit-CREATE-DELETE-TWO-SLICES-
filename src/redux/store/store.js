import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../slices/reservationSlice";
import customerReducer from "../slices/customerSlice";

export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customer: customerReducer,
  },
});
