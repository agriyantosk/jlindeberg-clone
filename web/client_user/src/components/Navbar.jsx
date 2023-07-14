import jlLogo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProduct } from "../store/actions/actionCreator";

export default function Navbar() {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="bg-white dark:bg-gray-700 sticky top-0 z-50 py-2">
                <div className="max-w-screen-xl mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <Link to={"/"}>
                                    <a href="#" className="flex items-center">
                                        <img
                                            src={jlLogo}
                                            className="h-5"
                                            alt="JL Logo"
                                        />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/product"}>
                                    <a
                                        href="#" onClick={() => {dispatch(fetchProduct())}}
                                        className="text-gray-900 dark:text-white hover:underline"
                                        aria-current="page"
                                    >
                                        ALL COLLECTION
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:underline"
                                    aria-current="page"
                                >
                                    GOLF
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    FASHION
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    SPORT
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 dark:text-white hover:underline"
                                >
                                    TENNIS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
