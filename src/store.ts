import { configureStore } from '@reduxjs/toolkit';
import featuredVehiclesReducer from './features/featuredVehiclesSlice';
import testimonialsReducer from './features/testimonialsSlice';
import blogPostsReducer from './features/blogPostsSlice';
import faqsReducer from './features/faqsSlice';
import servicesReducer from './features/servicesSlice';
import newsReducer from './features/newsSlice';

export const store = configureStore({
  reducer: {
    featuredVehicles: featuredVehiclesReducer,
    testimonials: testimonialsReducer,
    blogPosts: blogPostsReducer,
    faqs: faqsReducer,
    services: servicesReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
