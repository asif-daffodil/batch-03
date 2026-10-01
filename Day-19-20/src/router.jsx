import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Blog from "./pages/main/Blog";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AllPost from "./pages/admin/AllPost";
import AddPost from "./pages/admin/AddPost";
import AllComments from "./pages/admin/AllComments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/blog",
            element: <Blog />
        }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
        {
            path: "/admin/dashboard",
            element: <Dashboard />
        },
        {
            path: "/admin/all-post",
            element: <AllPost />
        },
        {
            path: "/admin/add-post",
            element: <AddPost />
        },
        {
            path: "/admin/all-commnets",
            element: <AllComments />
        }
    ]
  }
]);

export default router