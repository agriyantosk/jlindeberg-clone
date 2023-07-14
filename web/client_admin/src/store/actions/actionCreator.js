import { FETCH_CATEGORY_SUCCESS, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_SUCCESS } from "./actionType";
import axios from "axios";

export const fetchProductAction = (payload) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: payload,
    };
};

export const fetchCategoryAction = (payload) => {
    return {
        type: FETCH_CATEGORY_SUCCESS,
        payload: payload,
    };
};

export const fetchCategory = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.get("http://localhost:3000/category");
            // if (!response.ok) {
            //     throw await response.text();
            // }

            // const json = await response.json();
            const action = fetchCategoryAction(response.data);
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    };
};

export const deleteCategoryById = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.delete(
                `http://localhost:3000/category/delete/${id}`,
                {
                    headers: {
                        access_token: localStorage.access_token,
                    },
                }
            );
            dispatch(fetchCategory());
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Category Successfully Deleted",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };
};

export const fetchProduct = () => {
    return async (dispatch, getState) => {
        try {
            const response = await axios("http://localhost:3000/product", {
                method: "GET",
            });
            // if (!response.ok) {
            //     throw await response.text();
            // }
            // const json = await response.json();
            const action = fetchProductAction(response.data);
            dispatch(action);
        } catch (error) {
            console.log(error);
        }
    };
};

export const fetchProductImages = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios(`http://localhost:3000/product/${id}`)
            const action = {type: FETCH_PRODUCTS_BY_ID_SUCCESS, payload: response.data}
            dispatch(action)
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteProductById = (id) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.delete(
                `http://localhost:3000/product/delete/${id}`,
                {
                    headers: {
                        access_token: localStorage.access_token,
                    },
                }
            );
            dispatch(fetchProduct());
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Successfully Deleted",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };
};

export const handleSubmitProduct = (product, status, imgInputs, id) => {
    return async (dispatch, getState) => {
        try {
            if (status.status.status === "add") {
                const response = await axios.post(
                    "http://localhost:3000/product/add",
                    {product, imgInputs},
                    {
                        headers: {
                            access_token: localStorage.access_token,
                        },
                    }
                );
                dispatch(fetchProduct());
                console.log(response)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.response.data.message,
                    footer: '<a href="">Why do I have this issue?</a>',
                });
            } else if (status.status.status === "edit") {
                const response = await axios.patch(
                    "http://localhost:3000/product/edit/" + id,
                    {product, imgInputs},
                    {
                        headers: {
                            access_token: localStorage.access_token,
                        },
                    }
                );
            }
            dispatch(fetchProduct());
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Product Successfully Edited",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };
};

export const handleSubmitCategory = (category) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/category/add",
                category,
                {
                    headers: {
                        access_token: localStorage.access_token,
                    },
                }
            );
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Category Successfully Added",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };
};

export const handleSubmitUser = (form) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/author/register",
                form
            );
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Register Success",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };
};

export const handleLoginUser = (login) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/author/login",
                login
            );
            localStorage.access_token = response.data;
            if (response) {
                location.reload()
            }
            // Swal.fire({
            //     position: "center",
            //     icon: "success",
            //     title: "Login Success",
            //     showConfirmButton: false,
            //     timer: 1500,
            // });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };
};

export const logout = () => {
    return async (dispatch, getState) => {
        try {
            localStorage.removeItem("access_token");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Log Out Successfull",
                text: "See you later",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error.response.data.message,
                footer: '<a href="">Why do I have this issue?</a>',
            });
        }
    };
};
