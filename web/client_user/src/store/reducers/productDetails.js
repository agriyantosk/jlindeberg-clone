import { FETCH_PRODUCT_DETAIL_SUCCESS } from "../actions/actionType";

const initialState = { productsDetails: [] };

export default function productDetailReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_DETAIL_SUCCESS:
        return {
            ...state,
            productsDetails: action.payload
        }
        default:
            return state
    }
}