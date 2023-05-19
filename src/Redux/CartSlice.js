import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  listCart: [],
  setShowModal: false,
};

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_ITEM: (state, action) => {
      const isExist = state.listCart.find(item => {
        return item.id === action.payload.id;
      });
      const isConflictSize = state.listCart.some(item => {
        return (
          item.size === action.payload.size && item.id === action.payload.id
        );
      });
      if (isExist && isConflictSize) {
        isExist.quantity += 1;
      } else {
        state.listCart.push(action.payload);
      }
      console.log(action.payload);
    },
    DELETE: (state, action) => {
      state.listCart = state.listCart.filter(
        (item, index) => index !== action.payload,
      );
    },
    DELETE_ALL: (state, action) => {
      state.listCart = action.payload;
      console.log(action.payload);
    },
    INCREASE: (state, action) => {
      const target = state.listCart.find(
        item =>
          item.id === action.payload.id && item.size === action.payload.size,
      );
      target.quantity = target.quantity + 1;
    },
    DECREASE: (state, action) => {
      const target = state.listCart.find(
        item =>
          item.id === action.payload.id && item.size === action.payload.size,
      );
      target.quantity = target.quantity - 1;
    },
    SET_SHOW_MODAL: (state, action) => {
      state.setShowModal = action.payload;
      console.log(action.payload);
    },
  },
});
