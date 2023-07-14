import Categories from "../components/Categories";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import HomeCarousel from "../components/HomeCarousel";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import TennisCollection from "../components/TennisCollection";

export default function HomePage() {
    return (
        <>
            <NavbarTop />
            <Navbar />
            <HomeCarousel />
            <HomeCard />
            <TennisCollection />
            <Categories />
            <Footer />
        </>
    );
}
