import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  DELETE_PRODUCT_FROM_LIST,
  SEARCH_PRODUCTS,
} from "../productTypes";

const initialState = {
  loading: true,
  products: [],
  filterProducts: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        filterProducts: action.payload,
        loading: false,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        products: [],
        error: action.payload,
      };
    case DELETE_PRODUCT_FROM_LIST:
      return {
        ...state,
        loading: false,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case SEARCH_PRODUCTS:
      return {
        ...state,
        products: state.filterProducts.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export { productReducer };
