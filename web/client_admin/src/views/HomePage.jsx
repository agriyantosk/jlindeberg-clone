import Logo from "../components/Logo";
import SideBar from "../components/SideBar";
import ProductTable from "../components/ProductTable";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col gap-8">
                <Logo />
                <div>
                    <SideBar />
                    <ProductTable />
                </div>
            </div>
        </>
    );
}
