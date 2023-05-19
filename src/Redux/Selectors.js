import {createSelector} from '@reduxjs/toolkit';

export const selectedProductSelector = state =>
  state.productReducer.selectedProduct;

export const listProductSelector = state => state.productReducer.listProduct;

export const listCategoryProductSelector = state =>
  state.productReducer.categoryProduct;

export const listPostSelector = state => state.postReducer.listPost;

export const listPostSelectedSelector = state => state.postReducer.selectedPost;

export const listViewAllProductSelector = state =>
  state.productReducer.viewAllProduct;

export const listCartSelector = state =>
  state.cartReducer?.listCart.filter(item => item.quantity !== 0);

export const searchProductSelector = state => state.productReducer.searchData;

export const searchResult = createSelector(
  listProductSelector,
  searchProductSelector,
  (products, searchData) => {
    return products.filter(
      product => product.name.includes(searchData) && searchData !== '',
    );
  },
);

export const showModalSelector = state => state.cartReducer.setShowModal;
