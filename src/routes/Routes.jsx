import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../admin/layout/Dashboard";
import Customers from "../admin/screens/Customers";
import ClientLayout from "../clientside/layout/ClientLayout";
import Home from "../clientside/screens/Home";
import RegisterForm from "../clientside/screens/RegisterForm";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ClientLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/register',
                element: <RegisterForm />,
            }
        ]
    },
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: 'customer',
                element: <Customers />,
                loader: () => fetch('http://localhost:5000/user')
            }
        ]
    },
]);

export default routes;