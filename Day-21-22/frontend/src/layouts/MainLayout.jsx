import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
    return (
        <div>
            <Header />
            <ToastContainer />
            <Outlet />
            <Footer />
        </div>
    );
};

export default MainLayout;