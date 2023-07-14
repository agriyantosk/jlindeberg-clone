import { combineReducers } from "redux";
import productReducer from "./product";
import productDetailReducer from "./productDetails";

const rootReducer = combineReducers({
    products: productReducer,
    productsDetails: productDetailReducer
})

export default rootReducer