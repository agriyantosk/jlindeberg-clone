import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function CollectionPage() {
  const [categories, setCategories] = useState();
  const getCategories = async () => {
    const response = await axios.get(`${baseUrl}/category`);
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
