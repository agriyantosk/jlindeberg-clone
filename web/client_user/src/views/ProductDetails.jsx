import React, { useState } from "react";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProduct, fetchProductById } from "../store/actions/actionCreator";
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
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const { productsDetails } = useSelector((state) => {
        return state.productsDetails;
    });

    console.log(id, "<<<");
    useEffect(() => {
        console.log("test", "<<<<");
        dispatch(fetchProductById(id));
        // dispatch(fetchProduct())
    }, []);

    return (
        <>
            <NavbarTop />
            <Navbar />
            <hr />
            <div>
                <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
                    <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                        <img
                            className="w-full"
                            alt="img of a girl posing"
                            src={productsDetails.mainImg}
                        />
                    </div>
                    <div className="md:hidden">
                        <img
                            className="w-full"
                            alt="img of a girl posing"
                            src="https://i.ibb.co/QMdWfzX/component-image-one.png"
                        />
                        <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
                            <img
                                alt="img-tag-one"
                                className="md:w-48 md:h-48 w-full"
                                src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
                            />
                            <img
                                alt="img-tag-one"
                                className="md:w-48 md:h-48 w-full"
                                src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                            />
                            <img
                                alt="img-tag-one"
                                className="md:w-48 md:h-48 w-full"
                                src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
                            />
                            <img
                                alt="img-tag-one"
                                className="md:w-48 md:h-48 w-full"
                                src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
                            />
                        </div>
                    </div>
                    <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                        <div className="border-b border-gray-200 pb-6">
                            <p className="text-sm leading-none text-gray-600">
                                {productsDetails?.Category?.name}
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
                                {productsDetails?.name}
                            </h1>
                            <p className="mt-4 text-2xl font-semibold leading-none text-gray-600">
                                ${productsDetails.price}
                            </p>
                        </div>
                        <div>
                            <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">
                                {productsDetails.description}
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
                                Composition: 100% calf leather, inside: 100%
                                lamb leather
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
                                                "transform " +
                                                (show
                                                    ? "rotate-180"
                                                    : "rotate-0")
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
                                    You will be responsible for paying for your
                                    own shipping costs for returning your item.
                                    Shipping costs are nonrefundable
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
                                                "transform " +
                                                (show2
                                                    ? "rotate-180"
                                                    : "rotate-0")
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
                                    If you have any questions on how to return
                                    your item to us, contact us.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h1
                    className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2 ml-24 underline
						"
                >
                    PERSPECTIVES
                </h1>
                <div className="container mx-auto">
                    <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                        <CarouselProvider
                            className="lg:block hidden"
                            naturalSlideWidth={100}
                            isIntrinsicHeight={true}
                            totalSlides={12}
                            visibleSlides={4}
                            step={1}
                            infinite={true}
                        >
                            <div className="w-full relative flex items-center justify-center">
                                <ButtonBack
                                    role="button"
                                    aria-label="slide backward"
                                    className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
                                    id="prev"
                                >
                                    <svg
                                        width={8}
                                        height={14}
                                        viewBox="0 0 8 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 1L1 7L7 13"
                                            stroke="white"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </ButtonBack>
                                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                    <Slider>
                                        <div
                                            id="slider"
                                            className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700"
                                        >
                                            {productsDetails?.Images?.map(
                                                (el, index) => {
                                                    return (
                                                        <Slide key={el.id}>
                                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                                <img
                                                                    src={
                                                                        el.imgUrl
                                                                    }
                                                                    alt="black chair and white table"
                                                                    className="object-cover object-center w-full h-full"
                                                                />
                                                            </div>
                                                        </Slide>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </Slider>
                                </div>
                                <ButtonNext
                                    role="button"
                                    aria-label="slide forward"
                                    className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                    id="next"
                                >
                                    <svg
                                        width={8}
                                        height={14}
                                        viewBox="0 0 8 14"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 1L7 7L1 13"
                                            stroke="white"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </ButtonNext>
                            </div>
                        </CarouselProvider>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <HomeCard />
            <Footer />
        </>
    );
}
