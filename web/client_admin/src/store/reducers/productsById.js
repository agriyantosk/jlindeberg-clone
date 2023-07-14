import { FETCH_PRODUCTS_BY_ID_SUCCESS } from "../actions/actionType";

const initialState = { productsById: [] };

export default function productsByIdReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_BY_ID_SUCCESS:
            return {
                ...state,
                productsById: action.payload
            };
            default:
                return state
    }
}