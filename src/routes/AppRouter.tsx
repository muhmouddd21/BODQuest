// import MainLayout from "@layouts/MainLayout/MainLayout";
// import Error from "@pages/Error/Error";
// import Home from "@pages/Home/Home";
// import Login from "@pages/Login/login";
// import Register from "@pages/Register/Register";
// const Home = lazy(()=>import("@pages/Home"));
import {  UserLayout } from "@layouts/index";
import { Error,  Login, Register, UserProfile, UserSetting } from "@pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([

 // --- Group 1
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },

// --- Group 2
    {
        path: "/", 
        element: (

                <UserLayout />
        ),
        errorElement: <Error />,
        children: [
            {
                index: true, 
                element: <UserProfile />,
            },
            {
                path: "settings", // Renders at "/settings"
                element: <UserSetting />,
            },
        ],
    },
]);

function AppRouter() {

return <RouterProvider router={router} />;
  
}

export default AppRouter