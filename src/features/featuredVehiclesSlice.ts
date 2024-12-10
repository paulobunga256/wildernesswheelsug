import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "../types/vehicle";
import featuredVehiclesData from "../data/featuredVehicles.json";

interface FeaturedVehiclesState {
  vehicles: Vehicle[];
}

const initialState: FeaturedVehiclesState = {
  vehicles: featuredVehiclesData,
};

console.log("Initial Featured Vehicles Data:", featuredVehiclesData);

export const featuredVehiclesSlice = createSlice({
  name: "featuredVehicles",
  initialState,
  reducers: {
    setFeaturedVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      console.log("Setting Featured Vehicles:", action.payload);
      state.vehicles = action.payload;
    },
  },
});

export const { setFeaturedVehicles } = featuredVehiclesSlice.actions;

// Selector to get featured vehicles from the state
export const selectFeaturedVehicles = (state: { featuredVehicles: FeaturedVehiclesState }) => state.featuredVehicles.vehicles;

export default featuredVehiclesSlice.reducer;
