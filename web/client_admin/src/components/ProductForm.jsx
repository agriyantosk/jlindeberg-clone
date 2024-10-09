import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  fetchCategory,
  handleSubmitProduct,
} from "../store/actions/actionCreator";

export default function ProductForm(status) {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    categoryId: "",
    mainImg: "",
  });

  const [inputs, setInputs] = useState([""]);

  const submitStatus = status;
  const { id } = useParams();

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => {
    return state.categories;
  });

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  const handleInputChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    const newInputs = [...inputs, ""];
    setInputs(newInputs);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleSubmitLocal = (e) => {
    e.preventDefault();
    product.slug = product.name.replace(" ", "-");
    console.log(product, inputs);
    dispatch(handleSubmitProduct(product, submitStatus, inputs, id));
    navigate("/");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProduct(() => ({
      ...product,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="h-screen flex flex-col py-[5%] w-full px-[10%]">
        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
          Create New Product
        </h3>
        <form className="space-y-6" action="#" onSubmit={handleSubmitLocal}>
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Insert product name..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <input
              type="textarea"
              name="description"
              value={product.description}
              onChange={handleInput}
              placeholder="Insert product description..."
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Insert product price..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Product Category
            </label>
            <select
              name="categoryId"
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Insert product category..."
              required
            >
              <option selected disabled>
                -- Select Category --
              </option>
              {categories.map((el) => {
                return <option value={el.id}>{el.name}</option>;
              })}
            </select>
          </div>
          <div>
            <label
              htmlFor="mainImg"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image URL
            </label>
            <input
              type="text"
              name="mainImg"
              value={product.mainImg}
              onChange={handleInput}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Insert main image URL..."
              required
            />
          </div>
          <div className="flex flex-col items-end w-full">
            {inputs.map((input, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-full"
              >
                <label
                  htmlFor="mainImg"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Additional Image URL
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  type="text"
                  value={input}
                  onChange={(event) => handleInputChange(index, event)}
                />
                {index > 0 && (
                  <button
                    type="button"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    onClick={() => handleRemoveInput(index)}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              onClick={handleAddInput}
            >
              Add Input
            </button>
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
