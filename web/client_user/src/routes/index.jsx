import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CollectionPage from "../views/CollectionPage";
import HomePage from "../views/HomePage";
import ProductDetails from "../views/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/product",
        element: <CollectionPage />
    },
    {
        path: "/product/:id",
        element: <ProductDetails />
    }
])

export default router