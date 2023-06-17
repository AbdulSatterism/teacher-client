import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import AddService from "../../Components/AddService/AddService";
import AllService from "../../Components/AllService/AllService";
import Details from "../../Components/Details/Details";
import Login from "../../Shared/Login/Login";
import SignUp from "../../Shared/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Comment from "../../Components/Comment/Comment";
import Review from "../../Components/Review/Review";
import Booking from "../../Components/Booking/Booking";
import BookedItem from "../../Components/BookedItem/BookedItem";

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
                element: <PrivateRoute>
                    <Details></Details>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allservice/${params.id}`)
            },
            {
                path: '/booking/:id',
                element: <PrivateRoute>
                    <Booking></Booking>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allservice/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute>
                    <BookedItem></BookedItem>
                </PrivateRoute>
            }
            ,
            {
                path: '/addservice',
                element: <PrivateRoute>
                    <AddService></AddService>
                </PrivateRoute>
            },
            {
                path: '/comment/:id',
                element: <PrivateRoute>
                    <Comment></Comment>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allservice/${params.id}`)
            },

            {
                path: '/review',
                element: <PrivateRoute>
                    <Review></Review>
                </PrivateRoute>
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