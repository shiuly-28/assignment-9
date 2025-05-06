import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import CategoryNews from "../componenet/CategoryNews";
import Home from "../layouts/pages/Home";
import Login from "../layouts/pages/Login";
import Register from "../layouts/pages/Register";
import AuthLayout from "../layouts/AuthLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayOut></HomeLayOut>,
        children: [
            {
                index:true,
                path: "",
                loader:()=>fetch("/event.json"),
                element: <Home></Home>,
            },
          
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
        ]
    },
    {
        path: "/my profile",
        element: <h2>my profile</h2>
    },
    {
        path: "/*",
        element: <h2>Error page</h2>,
    },
      {
        path: "/category/:id",
          element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/event.json"),
    }
]);
export default router;