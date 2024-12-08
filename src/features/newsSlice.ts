import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface NewsArticle {
  id: number;
  title: string;
  file: string;
  image: string;
  category: string;
  author: string;
  date: string;
  featured: boolean;
  excerpt: string; // Add excerpt property
}

interface NewsState {
  articles: NewsArticle[];
  categories: string[];
}

const initialState: NewsState = {
  articles: [],
  categories: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<NewsArticle[]>) => {
      state.articles = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setArticles, setCategories } = newsSlice.actions;

export const selectArticles = (state: RootState) => state.news.articles;
export const selectCategories = (state: RootState) => state.news.categories;

export default newsSlice.reducer;
