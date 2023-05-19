import {configureStore} from '@reduxjs/toolkit';
import {CartSlice} from './CartSlice';
import {ProductSlice} from './ProductSlice';
import {PostSlice} from './PostSlice';
export const Store = configureStore({
  reducer: {
    productReducer: ProductSlice.reducer,
    cartReducer: CartSlice.reducer,
    postReducer: PostSlice.reducer,
  },
});
