import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  text: string;
  rating: number;
}

interface TestimonialsState {
  testimonials: Testimonial[];
}

const initialState: TestimonialsState = {
  testimonials: testimonialsData,
};

export const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
