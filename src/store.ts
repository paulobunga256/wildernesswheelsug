import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import featuredVehiclesReducer from './features/featuredVehiclesSlice';
import testimonialsReducer from './features/testimonialsSlice';
import blogPostsReducer from './features/blogPostsSlice';

const rootReducer = combineReducers({
  featuredVehicles: featuredVehiclesReducer,
  testimonials: testimonialsReducer,
  blogPosts: blogPostsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
