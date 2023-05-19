import {createSlice} from '@reduxjs/toolkit';
import ProductData from '../mock-data/ProductData';

const initialState = {
  listProduct: ProductData,
  selectedProduct: null,
  categoryProduct: [],
  viewAllProduct: [],
  searchData: '',
};

export const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    SET_SELECTED_PRODUCT: (state, action) => {
      const productID = action.payload;
      state.selectedProduct = ProductData.find(item => item.id === productID);
    },
    SEARCH_PRODUCT: (state, action) => {
      state.searchData = action.payload;
    },
    SET_CATEGORY_PRODUCT: (state, action) => {
      state.categoryProduct = ProductData.filter(
        item => item.category === action.payload,
      );
    },
    SET_VIEWALL_PRODUCT: (state, action) => {
      if (action.payload?.newArrival) {
        state.viewAllProduct = ProductData.filter(
          item => item.newArrival === action.payload?.newArrival,
        );
      }
      if (action.payload?.saleStatus) {
        state.viewAllProduct = ProductData.filter(
          item => item.sale.status === action.payload?.saleStatus,
        );
      }
      console.log(action);
    },
  },
});
