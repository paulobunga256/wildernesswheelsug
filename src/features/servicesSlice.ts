import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import servicesData from "../data/services.json";
import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
  cta: string;
  IconComponent?: React.ComponentType<{ className?: string }>;
}

interface ServicesState {
  services: Service[];
}

const initialState: ServicesState = {
  services: servicesData,
};

const servicesSlice = createSlice({
  name: "services",
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
