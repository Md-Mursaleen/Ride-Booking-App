import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars: null
};
const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload.cars;
        }
    }
});

export const { setCars } = carSlice.actions;
export default carSlice.reducer;
export const selectCars = (state) => state.car.cars;
