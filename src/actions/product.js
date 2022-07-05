import axios from "axios";
import {
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCTS_SUCCESS,
  DELETE_PRODUCT_FROM_LIST,
  SEARCH_PRODUCTS,
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

const searchProducts = (str) => {
  return {
    type: SEARCH_PRODUCTS,
    payload: str,
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


export {
  fetchProductsSucess,
  fetchProductsFailure,
  fetchProducts,
  deleteProduct,
  searchProducts,
};
