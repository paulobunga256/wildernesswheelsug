import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import faqsData from '../data/faqs.json';

interface Faq {
  question: string;
  answer: string;
}

interface FaqsState {
  faqs: Faq[];
}

const initialState: FaqsState = {
  faqs: faqsData,
};

const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {
    setFaqs: (state, action: PayloadAction<Faq[]>) => {
      state.faqs = action.payload;
    },
  },
});

export const { setFaqs } = faqsSlice.actions;

export const selectFaqs = (state: RootState) => state.faqs.faqs;

export default faqsSlice.reducer;
