import CategoryForm from "../components/CategoryForm";
import SideBar from "../components/SideBar";

export default function AddCategory() {
  return (
    <>
      <div className=" flex h-screen">
        <SideBar />
        <CategoryForm />
      </div>
    </>
  );
}
