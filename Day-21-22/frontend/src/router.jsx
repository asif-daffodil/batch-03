import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Edit from "./pages/Edit";

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
            path: "/add-student",
            element: <Add />
        },
        {
          path: "/edit-student/:id",
          element: <Edit />
        }
    ]
  },
]);

export default router;