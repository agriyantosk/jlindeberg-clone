import {
    FETCH_CATEGORY_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
} from "../actions/actionType";

const initialState = { categories: [] };

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATEGORY_SUCCESS:
            return { ...state, categories: action.payload };
        default:
            return state
    }
}