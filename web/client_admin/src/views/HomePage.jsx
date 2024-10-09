import Logo from "../components/Logo";
import SideBar from "../components/SideBar";
import ProductTable from "../components/ProductTable";

export default function HomePage() {
  return (
    <>
      <div className="h-screen flex">
        <SideBar />
        <div className="py-[5%] px-[10%]">
          <Logo />
          <ProductTable />
        </div>
      </div>
    </>
  );
}
