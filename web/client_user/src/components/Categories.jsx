import { Link } from "react-router-dom";

export default function Categories({ categories }) {
  return (
    <>
      <h1 className="mx-4 text-2xl underline">POPULAR CATEGORIES TO EXPLORE</h1>
      <div className="mx-4 flex items-center justify-center h-screen mt-0 top-0">
        <div className="mx-4 flex flex-grow items-center justify-center justify-items-center h-full w-full">
          {categories &&
            categories.map((el, index) => {
              return (
                <Link
                  to={`/product?category=${el.name}`}
                  key={index}
                  className="h-full py-10 hover:cursor-pointer hover:bg-black hover:text-white overflow-hidden hover:underline"
                >
                  <h1 className="text-2xl md:text-7xl font-bold transform -rotate-90 h-full flex items-center justify-center">
                    {el?.name.toUpperCase()}
                  </h1>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
