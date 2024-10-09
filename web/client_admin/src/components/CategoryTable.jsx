import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteCategoryById,
  fetchCategory,
} from "../store/actions/actionCreator";

export default function CategoryTable() {
  // const [category, setCategory] = useState([]);
  const { categories } = useSelector((state) => {
    return state.categories;
  });

  const dispatch = useDispatch();

  const deleteCategory = (id) => {
    dispatch(deleteCategoryById(id));
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="text-end">
          <Link to={"/add-category"}>
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Add Category
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
                  Created At
                </th>
                <th scope="col" className="px-6 py-3">
                  Updated At
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((el, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                  key={el.id}
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{el.name}</td>
                  <td className="px-6 py-4">
                    {new Date(el.createdAt).toLocaleString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(el.updatedAt).toLocaleString("id-ID", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 text-start">
                    <a
                      href="#"
                      onClick={() => {
                        deleteCategory(el.id);
                      }}
                      className="font-medium text-indigo-600 dark:text-indigo-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
