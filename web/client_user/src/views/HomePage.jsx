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
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function HomePage() {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const getCategories = async () => {
    const response = await axios.get(`${baseUrl}/category`);
    setCategories(response?.data);
  };

  const getProducts = async () => {
    const response = await axios.get(`${baseUrl}/product`);
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
