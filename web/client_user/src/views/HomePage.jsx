import dotenv from "dotenv";
dotenv.config();

import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import HomeCarousel from "../components/HomeCarousel";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import TennisCollection from "../components/TennisCollection";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage() {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const getCategories = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/category`);
    setCategories(response?.data);
  };

  const getProducts = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/product`);
    setProducts(response?.data);
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  return (
    <>
      <NavbarTop />
      <Navbar categories={categories && categories} />
      <HomeCarousel />
      <HomeCard products={products} />
      <TennisCollection />
      <Categories categories={categories && categories} />
      <Footer />
    </>
  );
}
