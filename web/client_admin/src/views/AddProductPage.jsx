import ProductForm from "../components/ProductForm";
import SideBar from "../components/SideBar";

export default function AddProduct(status) {
  return (
    <>
      <div className=" flex h-screen">
        <SideBar />
        <ProductForm status={status} />
      </div>
    </>
  );
}
