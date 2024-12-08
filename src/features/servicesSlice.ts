import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface Service {
  icon: React.ComponentType<{ className: string }>;
  title: string;
  description: string;
  cta: string;
}

interface ServicesState {
  services: Service[];
}

const initialState: ServicesState = {
  services: [],
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    setServices: (state, action: PayloadAction<Service[]>) => {
      state.services = action.payload;
    },
  },
});

export const { setServices } = servicesSlice.actions;

export const selectServices = (state: RootState) => state.services.services;

export default servicesSlice.reducer;
