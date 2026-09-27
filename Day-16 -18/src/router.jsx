import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/blog";
import MainLayout from "./layout/MainLayout";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SingleProduct from "./pages/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path: "/sign-in",
                element: <SignIn />
            },
            {
                path: "/sign-up",
                element: <SignUp />
            },
            {
                path: "/single-product",
                element: <SingleProduct />
            }
        ]
    }
]);

export default router