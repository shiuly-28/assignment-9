import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import CategoryNews from "../componenet/CategoryNews";
import Home from "../layouts/pages/Home";
import Login from "../layouts/pages/Login";
import Register from "../layouts/pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivetRouter from "../provider/PrivetRoute";
import Error from "../layouts/pages/Error";
import MyProfile from "../layouts/pages/MyProfile";

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
        path: "/myProfile",
        element: <MyProfile></MyProfile>
    },
    {
        path: "/*",
        element: <Error></Error>,
    },
      {
        path: "/category/:id",
          element: <PrivetRouter>
              <CategoryNews></CategoryNews>
          </PrivetRouter>,
        loader: () => fetch("/event.json"),
    }
]);
export default router;