import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    travelTimeInformation: null
};

export const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers: {
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        }
    }
});

export const { setTravelTimeInformation } = navSlice.actions;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;
export default navSlice.reducer;