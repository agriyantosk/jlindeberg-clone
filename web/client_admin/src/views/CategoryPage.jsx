import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import ProductForm from "../components/ProductForm";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";
import CategoryTable from "../components/CategoryTable";

export default function CategoryPage() {
  return (
    <>
      <div className="flex h-screen">
        <SideBar />
        <div className="flex flex-col flex-grow justify-center px-[10%] gap-10 w-full">
          <Logo />
          <CategoryTable />
        </div>
      </div>
    </>
  );
}
