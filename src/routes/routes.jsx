import { createBrowserRouter } from "react-router";
import HomeLayOut from "../layouts/HomeLayOut";
import CategoryNews from "../componenet/CategoryNews";
import Home from "../layouts/pages/Home";

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
                path: "/category/:id",
                element:<CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: "/my profile",
        element: <h2>my profile</h2>
    },
    {
        path: "/*",
        element: <h2>Error page</h2>,
    }
]);
export default router;