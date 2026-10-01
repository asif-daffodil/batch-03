import { Outlet } from "react-router";
import Footer from "../components/main/Footer";
import Header from "../components/main/Header";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;