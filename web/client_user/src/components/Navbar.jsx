import jlLogo from "../assets/logo.png";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../store/actions/actionCreator";

export default function Navbar({ categories }) {
  // const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");
  console.log(categoryParams);
  return (
    <>
      <nav className="bg-white dark:bg-gray-700 sticky top-0 z-50 p-1">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-wrap font-medium mt-0 md:mr-6 gap-2 md:gap-5 text-sm">
              <li>
                <Link to={"/"}>
                  <a href="#" className="flex items-center">
                    <img src={jlLogo} className="h-5" alt="JL Logo" />
                  </a>
                </Link>
              </li>
              <li>
                <Link to={"/product"}>
                  <a
                    href="#"
                    className={`text-gray-900 dark:text-white hover:underline hover:bg-black hover:text-white px-2 py-1 hover:cursor-pointer ${
                      location.pathname === "/product" &&
                      (!categoryParams || categoryParams === "")
                        ? "bg-black text-white underline"
                        : ""
                    }`}
                    aria-current="page"
                  >
                    ALL COLLECTION
                  </a>
                </Link>
              </li>
              {categories &&
                categories.map((el) => {
                  return (
                    <Link to={`/product?category=${el.name}`}>
                      <li>
                        <a
                          href="#"
                          className={`text-gray-900 dark:text-white hover:underline hover:bg-black hover:text-white px-2 py-1 hover:cursor-pointer ${
                            location.pathname === "/product" &&
                            categoryParams &&
                            categoryParams === el.name
                              ? "bg-black text-white underline"
                              : ""
                          }`}
                          aria-current="page"
                        >
                          {el.name.toUpperCase()}
                        </a>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
