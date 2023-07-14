// import { FETCH_PRODUCTS_SUCCESS } from "../actions/actionType"

import { combineReducers } from "redux";
import categoryReducer from "./category";
import productReducer from "./product";
import productsByIdReducer from "./productsById";

// const initialState = {products: []}

// export default function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case FETCH_PRODUCTS_SUCCESS:
//       return { 
//         ...state,
//         products: action.payload
//     }
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  productsById: productsByIdReducer
})

export default rootReducer