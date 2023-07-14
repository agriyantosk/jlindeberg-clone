import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import ProductForm from "../components/ProductForm";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";
import CategoryTable from "../components/CategoryTable";

export default function CategoryPage() {
    return (
        <>
            <div className="flex flex-col gap-8">
                <Logo />
                <div>
                    <SideBar />
                    <CategoryTable />
                </div>
            </div>
        </>
    );
}
