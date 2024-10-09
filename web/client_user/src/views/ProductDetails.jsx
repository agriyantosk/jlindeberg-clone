import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
// import { fetchProduct, fetchProductById } from "../store/actions/actionCreator";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";

export default function ProductDetails() {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [productDetails, setProductDetails] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();

  // const { productDetails } = useSelector((state) => {
  //     return state.productDetails;
  // });
  const getProductDetails = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/product/${id}`);
    console.log(response);
    setProductDetails(response?.data);
  };

  const getCategories = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/category`);
    setCategories(response?.data);
  };

  const getProducts = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/product`);
    setProducts(response?.data);
  };

  useEffect(() => {
    if (productDetails && productDetails.mainImg) {
      setSelectedImage(productDetails.Images[0].imgUrl);
    }
  }, [productDetails]);

  // console.log(id, "<<<");
  // useEffect(() => {
  //     console.log("test", "<<<<");
  //     dispatch(fetchProductById(id));
  //     // dispatch(fetchProduct())
  // }, []);

  useEffect(() => {
    getProductDetails();
    getProducts();
    getCategories();
  }, []);

  return (
    <>
      <NavbarTop />
      <Navbar categories={categories && categories} />
      <hr />
      <div>
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="flex justify-center items-center space-x-5 h-96">
            <img
              className="w-full max-w-md object-cover h-full bg-red-400"
              alt="img of a girl posing"
              src={selectedImage}
            />
            <div className="flex flex-col items-center justify-evenly space-y-4 overflow-y-auto h-full">
              <img
                alt="img-tag-one"
                className="md:w-48 md:h-48 w-32 h-32 cursor-pointer"
                src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
                onClick={() =>
                  setSelectedImage(
                    "https://i.ibb.co/QMdWfzX/component-image-one.png"
                  )
                }
              />
              <img
                alt="img-tag-two"
                className="md:w-48 md:h-48 w-32 h-32 cursor-pointer"
                src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                onClick={() =>
                  setSelectedImage("https://i.ibb.co/f17NXrW/Rectangle-244.png")
                }
              />
              <img
                alt="img-tag-three"
                className="md:w-48 md:h-48 w-32 h-32 cursor-pointer"
                src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
                onClick={() =>
                  setSelectedImage("https://i.ibb.co/cYDrVGh/Rectangle-245.png")
                }
              />
              <img
                alt="img-tag-four"
                className="md:w-48 md:h-48 w-32 h-32 cursor-pointer"
                src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                onClick={() =>
                  setSelectedImage("https://i.ibb.co/f17NXrW/Rectangle-244.png")
                }
              />
            </div>
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
            <div className="border-b border-gray-200 pb-6">
              <p className="text-sm leading-none text-gray-600">
                {productDetails?.Category?.name}
              </p>
              <h1
                className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
              >
                {productDetails?.name}
              </h1>
              <p className="mt-4 text-2xl font-semibold leading-none text-gray-600">
                ${productDetails && productDetails.price}
              </p>
            </div>
            <div>
              <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                {productDetails && productDetails.description}
              </p>
              <p className="text-base leading-4 mt-7 text-gray-600">
                Product Code: 8BN321AF2IF0NYA
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                Length: 13.2 inches
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                Height: 10 inches
              </p>
              <p className="text-base leading-4 mt-4 text-gray-600">
                Depth: 5.1 inches
              </p>
              <p className="md:w-96 text-base leading-normal text-gray-600 mt-4">
                Composition: 100% calf leather, inside: 100% lamb leather
              </p>
            </div>
            <div>
              <div className="border-t border-b py-4 mt-7 border-gray-200">
                <div
                  onClick={() => setShow(!show)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800">
                    Shipping and returns
                  </p>
                  <button
                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    <svg
                      className={
                        "transform " + (show ? "rotate-180" : "rotate-0")
                      }
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                    (show ? "block" : "hidden")
                  }
                  id="sect"
                >
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are nonrefundable
                </div>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-gray-200">
                <div
                  onClick={() => setShow2(!show2)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800">
                    Contact us
                  </p>
                  <button
                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    <svg
                      className={
                        "transform " + (show2 ? "rotate-180" : "rotate-0")
                      }
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                    (show2 ? "block" : "hidden")
                  }
                  id="sect"
                >
                  If you have any questions on how to return your item to us,
                  contact us.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeCard products={products} />
      <Footer />
    </>
  );
}
