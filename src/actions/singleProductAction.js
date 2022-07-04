import axios from "axios";
import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
} from "../singleProductTypes";

const fetchProductSuccess = (product) => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: product,
  };
};

const fetchProductFailure = (error) => {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
  };
};

const fetchProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        const product = response.data;
        dispatch(fetchProductSuccess(product));
      })
      .catch((error) => {
        const errorMgs = error.message;
        dispatch(fetchProductFailure(errorMgs));
      });
  };
};

export { fetchProductSuccess, fetchProductFailure, fetchProduct };
