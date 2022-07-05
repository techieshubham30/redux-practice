import axios from "axios";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_FROM_LIST,
  FILTER_PRODUCT_FROM_LIST,
} from "../productTypes";

const fetchProductsSucess = (products) => {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products,
  };
};

const fetchProductsFailure = (error) => {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error,
  };
};

const deleteProduct = (id) => {
  return {
    type: DELETE_PRODUCT_FROM_LIST,
    payload: id,
  };
};

const fetchProducts = () => {
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const products = response.data;
        dispatch(fetchProductsSucess(products));
      })
      .catch((error) => {
        const errorMgs = error.message;
        dispatch(fetchProductsFailure(errorMgs));
      });
  };
};

const filterProducts = (filterVal) => {
  return (dispatch) => {
    dispatch({
      type: FILTER_PRODUCT_FROM_LIST,
      payload: filterVal,
    })
  }
};

export {
  fetchProductsSucess,
  fetchProductsFailure,
  fetchProducts,
  deleteProduct,
  filterProducts
};
