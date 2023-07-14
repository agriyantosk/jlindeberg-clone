import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { handleSubmitCategory } from "../store/actions/actionCreator";

export default function CategoryForm() {
    const [category, setCategory] = useState({
        name: "",
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleInput = (e) => {
        const {name, value} = e.target
        setCategory(() => ({
            ...category,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleSubmitCategory(category))
        navigate("/category")
    }

    return (
        <>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Create New Category
                </h3>
                <form
                    className="space-y-6"
                    action="#"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Category Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={category.name}
                            onChange={handleInput}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="Insert product name..."
                            required
                        />
                    </div>
                    <button
                            type="submit"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Submit
                        </button>
                </form>
            </div>
        </>
    );
}
