import ProductForm from "../components/ProductForm";
import SideBar from "../components/SideBar";

export default function AddProduct(status) {
    return (
        <>
            <SideBar />
            <ProductForm status={status} />
        </>
    );
}
