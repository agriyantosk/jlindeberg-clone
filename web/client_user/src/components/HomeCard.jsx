import React, { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
// import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
// import { fetchProduct } from "../store/actions/actionCreator";

export default function HomeCard({ products }) {
  console.log(products);
  // const dispatch = useDispatch()
  const navigate = useNavigate();
  // const { products } = useSelector((state) => {
  //     return state.products
  // })

  //   useEffect(() => {
  //     // dispatch(fetchProduct())

  //   }, []);

  const [visibleSlides, setVisibleSlides] = useState(2); // Default to 2 slides

  useEffect(() => {
    const updateVisibleSlides = () => {
      console.log(window.innerWidth, "inner");
      if (window.innerWidth >= 768) {
        setVisibleSlides(4); // Set 4 slides for md (768px) and larger
      } else {
        console.log("masuk kesini");
        setVisibleSlides(2); // Set 2 slides for smaller screens
      }
    };

    // Set visible slides on initial load
    updateVisibleSlides();
    console.log(visibleSlides, ">>>");

    // Update on window resize
    window.addEventListener("resize", updateVisibleSlides);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, [window.innerWidth]);

  return (
    <>
      <br />
      <br />
      <Typography
        variant="h1"
        color="black"
        className="text-5xl md:text-6xl lg:text-7xl"
      >
        NEW IN
      </Typography>
      <hr />
      <div className="container mx-auto">
        <div className="flex items-center justify-center w-full h-full py-12 md:py-24 sm:py-8 px-4">
          {/* Carousel for desktop and large size devices */}
          <CarouselProvider
            // className="md:block hidden"
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={12}
            visibleSlides={visibleSlides}
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
                    strokeWidth={visibleSlides}
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
                    {products &&
                      products.slice(0, 10).map((el, index) => {
                        return (
                          <Slide index={index}>
                            <Link to={`/product/${el.id}`}>
                              <a href="#">
                                <div
                                  className="flex flex-shrink-0 relative w-full sm:w-auto"
                                  key={el.id}
                                >
                                  <img
                                    src={el.mainImg}
                                    className="object-cover object-center w-max h-full"
                                  />
                                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">
                                      ${el.price}
                                    </h2>
                                    <div className="flex h-full items-end pb-6">
                                      <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">
                                        {el.name}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </Slide>
                        );
                      })}
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
    </>
  );
}
