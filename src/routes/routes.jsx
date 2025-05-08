import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import CategoryNews from "../componenet/CategoryNews";
import Home from "../layouts/pages/Home";
import Login from "../layouts/pages/Login";
import Register from "../layouts/pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import Error from "../layouts/pages/Error";
import MyProfile from "../layouts/pages/MyProfile";
import PrivetRoute from "../provider/PrivetRoute";
import ForgetPassword from "../layouts/pages/ForgetPassword";
import ExtraNewCard from "../layouts/pages/ExtraNewCard";

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
            {
                path: "/ExtraNewsCard",
                element: <ExtraNewCard></ExtraNewCard>
            }
          
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
        element: <PrivetRoute>
            <MyProfile></MyProfile>
        </PrivetRoute>
    },
    {
        path: "/*",
        element: <Error></Error>,
    },
      {
        path: "/category/:id",
          element: <PrivetRoute>
              <CategoryNews></CategoryNews>
          </PrivetRoute>,
        loader: () => fetch("/event.json"),
    },
    {
        path: "/forgatePassword",
        element:<ForgetPassword></ForgetPassword>
    },
    
]);
export default router;