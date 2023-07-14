import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    deleteProductById,
    fetchProduct,
    fetchProductAction,
    fetchProductImages,
} from "../store/actions/actionCreator";

export default function ProductTable() {
    // const [data, setData] = useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const { products } = useSelector((state) => {
        return state.products;
    });
    const { productsById } = useSelector((state) => {
        return state.productsById;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    return (
        <>
            <div className=" text-end py-6">
                <Link to={"/add-product"}>
                    <button
                        type="button"
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Add Product
                    </button>
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Created By
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Main Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Images
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((el, index) => {
                            return (
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    key={el.id}
                                >
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{el.name}</td>
                                    <td className="px-6 py-4">
                                        {el.Category.name}
                                    </td>
                                    <td className="px-6 py-4">${el.price}</td>
                                    <td className="px-6 py-4">
                                        {el.Author.username}
                                    </td>
                                    <td className="px-6 py-4">
                                        <img
                                            src={el.mainImg}
                                            alt="Product Image"
                                            className="w-48 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a
                                            href="#"
                                            className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                                        >
                                            <div
                                                onClick={() => {
                                                    dispatch(
                                                        fetchProductImages(
                                                            el.id
                                                        )
                                                    );
                                                }}
                                            >
                                                <button
                                                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                                                    type="button"
                                                    onClick={() =>
                                                        setShowModal(true)
                                                    }
                                                >
                                                    View Images
                                                </button>
                                            </div>
                                            {showModal ? (
                                                <>
                                                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                            {/*content*/}
                                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                                {/*header*/}
                                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                    <h3 className="text-3xl font-semibold">
                                                                        Modal
                                                                        Title
                                                                    </h3>
                                                                    <button
                                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                        onClick={() =>
                                                                            setShowModal(
                                                                                false
                                                                            )
                                                                        }
                                                                    >
                                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                                            ×
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                                {/*body*/}
                                                                <div
                                                                    className="relative p-6 flex-auto"
                                                                    style={{
                                                                        display:
                                                                            "flex",
                                                                    }}
                                                                >
                                                                    {productsById.Images.map(
                                                                        (
                                                                            item,
                                                                            index
                                                                        ) => {
                                                                            return (
                                                                                <img
                                                                                    src={
                                                                                        item.imgUrl
                                                                                    }
                                                                                    alt={
                                                                                        "image" +
                                                                                        {
                                                                                            index,
                                                                                        }
                                                                                    }
                                                                                    style={{
                                                                                        maxHeight:
                                                                                            "300px", // Set the maximum height as desired
                                                                                    }}
                                                                                />
                                                                            );
                                                                        }
                                                                    )}
                                                                </div>
                                                                {/*footer*/}
                                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                    <button
                                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                                        type="button"
                                                                        onClick={() =>
                                                                            setShowModal(
                                                                                false
                                                                            )
                                                                        }
                                                                    >
                                                                        Close
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="opacity-25 fixed inset-0 z-40 bg-transparent"></div>
                                                </>
                                            ) : null}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 flex items-center justify-center">
                                        <Link to={`/edit-product/${el.id}`}>
                                            <a
                                                href="#"
                                                className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline mr-2"
                                            >
                                                Edit
                                            </a>
                                        </Link>
                                        <a
                                            href="#"
                                            onClick={() =>
                                                dispatch(
                                                    deleteProductById(el.id)
                                                )
                                            }
                                            className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                                        >
                                            Delete
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
