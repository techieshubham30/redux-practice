import {
  FETCH_PRODUCT_FAILURE,
  FETCH_PRODUCT_SUCCESS,
} from "../singleProductTypes";

const initialState = {
  loading: true,
  product: null,
  error: "",
};

const singleProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
        loading: false,
      };

    case FETCH_PRODUCT_FAILURE:
      return {
        loading: false,
        product: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export { singleProductReducer };
