import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToCustomer } from "../redux/slices/customerSlice";

function CustomerCard({ id, name, food }) {

  const dispatch = useDispatch();
  const [customerFoodInput, setCustomerFoodInput] = useState("");

  return (
    <div className="customer-food-card-container" key={id}>
      <h5>{name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
            {food.map((food, index) => {
                return <p key={index}>{food}</p>;
            })}
        </div>
        <div className="customer-food-input-container">
            <input 
                type='text'
                value={customerFoodInput}
                onChange={(e) => setCustomerFoodInput(e.target.value)}
            />
          <button
            onClick={() => (
                dispatch(addFoodToCustomer({id, food: customerFoodInput})),
                setCustomerFoodInput('') )}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerCard;
