import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage.jsx";
import HomePage from "../views/HomePage.jsx";
import RegisterPage from "../views/RegisterPage"
import CategoryPage from "../views/CategoryPage.jsx";
import AddProduct from "../views/AddProductPage.jsx";
import AddCategory from "../views/AddCategoryPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        loader: async () => {
            const user = await localStorage.getItem('access_token')
            if (!user) {
                return redirect("/login")
            }
            return null
        }
    },
    {
        path: "/login",
        element: <LoginPage />,
        loader: async () => {
            const user = await localStorage.getItem('access_token')
            if (user) {
                return redirect("/")
            }
            return null
        }
    },
    {
        path: "/register",
        element: <RegisterPage />,
        loader: async () => {
            const user = await localStorage.getItem('access_token')
            if (!user) {
                return redirect("/login")
            }
            return null
        }
    },
    {
        path: "/category",
        element: <CategoryPage />,
        loader: async () => {
            const user = await localStorage.getItem('access_token')
            if (!user) {
                return redirect("/login")
            }
            return null
        }
    },
    {
        path: "/add-product",
        element: <AddProduct status={"add"} />,
        loader: async () => {
            const user = await localStorage.getItem('access_token')
            if (!user) {
                return redirect("/login")
            }
            return null
        }
    },
    {
        path: "/add-category",
        element: <AddCategory />,
        loader: async () => {
            const user = await localStorage.getItem('access_token')
            if (!user) {
                return redirect("/login")
            }
            return null
        }
    },
    {
        path: "/edit-product/:id",
        element: <AddProduct status={"edit"} />,
        loader: async () => {
            const user = await localStorage.getItem('access_token')
            if (!user) {
                return redirect("/login")
            }
            return null
        }
    },
]);

export default router