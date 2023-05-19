import {createSlice} from '@reduxjs/toolkit';
import PostData from '../mock-data/PostData';
export const PostSlice = createSlice({
  name: 'Post',
  initialState: {
    listPost: PostData,
    selectedPost: null,
  },
  reducers: {
    SET_SELECTED_POST: (state, action) => {
      state.selectedPost = state.listPost.find(item => {
        return item.id === action.payload;
      });
    },
  },
});
