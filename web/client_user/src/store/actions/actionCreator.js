import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCT_DETAIL_SUCCESS } from "./actionType"
import axios from 'axios'

export const fetchProduct = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios("http://localhost:3000/product", {
                method: "GET"
            })
            // if (!response.ok) {
            //     throw await response.text()
            // }
            // const json = await response.json()
            console.log(response, ">>>>>>>")
            const action = {type: FETCH_PRODUCTS_SUCCESS, payload: response.data}
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

export const fetchProductById = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await fetch(`http://localhost:3000/product/${id}`, {
                method: "GET"
            })
            if (!response.ok) {
                throw await response.text()
            }
            const json = await response.json()
            const action = {type: FETCH_PRODUCT_DETAIL_SUCCESS, payload: json}
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}