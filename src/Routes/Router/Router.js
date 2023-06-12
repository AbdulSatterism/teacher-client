import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import AddService from "../../Components/AddService/AddService";
import AllService from "../../Components/AllService/AllService";
import Details from "../../Components/Details/Details";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allservice',
                element: <AllService></AllService>,
                loader: () => fetch(`http://localhost:5000/allservice`)
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`http://localhost:5000/allservice/${params.id}`)
            }
            ,
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    }
]);

export default router;