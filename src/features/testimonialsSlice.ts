import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import testimonialsData from '../data/testimonials.json';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

interface TestimonialsState {
  testimonials: Testimonial[];
}

const initialState: TestimonialsState = {
  testimonials: testimonialsData,
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    setTestimonials: (state, action: PayloadAction<Testimonial[]>) => {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialsSlice.actions;

export const selectTestimonials = (state: RootState) => state.testimonials.testimonials;

export default testimonialsSlice.reducer;
