import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { productReducer } from "./productReducer";
import { singleProductReducer } from "./singleProductReducer";

const rootReducer = combineReducers({
  counterReducer,
  productReducer,
  singleProductReducer,
});

export { rootReducer };
