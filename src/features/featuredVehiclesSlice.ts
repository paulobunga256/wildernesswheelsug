import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Vehicle } from '../types/vehicle';
import featuredVehiclesData from '../data/featuredVehicles.json';

interface FeaturedVehiclesState {
  vehicles: Vehicle[];
}

const initialState: FeaturedVehiclesState = {
  vehicles: featuredVehiclesData,
};

export const featuredVehiclesSlice = createSlice({
  name: 'featuredVehicles',
  initialState,
  reducers: {
    setFeaturedVehicles: (state, action: PayloadAction<Vehicle[]>) => {
      state.vehicles = action.payload;
    },
  },
});

export const { setFeaturedVehicles } = featuredVehiclesSlice.actions;

export default featuredVehiclesSlice.reducer;
