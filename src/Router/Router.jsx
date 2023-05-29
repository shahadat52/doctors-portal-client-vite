import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Root from "../Layout/Root";
import Login from "../Login/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]
    }
]) 