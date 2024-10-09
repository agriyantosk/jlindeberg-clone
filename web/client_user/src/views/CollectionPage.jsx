import dotenv from "dotenv";
dotenv.config();

import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function CollectionPage() {
  const [categories, setCategories] = useState();
  const getCategories = async () => {
    const response = await axios.get(`${process.env.BASE_URL}/category`);
    console.log(response);
    setCategories(response?.data);
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <NavbarTop />
      <Navbar categories={categories && categories} />
      <hr />
      <br />
      <ProductCard />
      <br />
      <Footer />
    </>
  );
}
