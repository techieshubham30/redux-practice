import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { productReducer } from "./productReducer";
import { singleProductReducer } from "./singleProductReducer";
import {cartReducer} from "./cartReducer"

const rootReducer = combineReducers({
  counterReducer,
  productReducer,
  singleProductReducer,
  cartReducer
});

export { rootReducer };
