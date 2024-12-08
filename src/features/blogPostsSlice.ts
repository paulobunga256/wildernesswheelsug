import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import blogPostsData from '../data/blogPosts.json';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

interface BlogPostsState {
  posts: BlogPost[];
}

const initialState: BlogPostsState = {
  posts: blogPostsData,
};

export const blogPostsSlice = createSlice({
  name: 'blogPosts',
  initialState,
  reducers: {
    setBlogPosts: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload;
    },
  },
});

export const { setBlogPosts } = blogPostsSlice.actions;

export default blogPostsSlice.reducer;
