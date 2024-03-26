import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../admin/layout/Dashboard";
import Customers from "../admin/screens/Customers";
import ClientLayout from "../clientside/layout/ClientLayout";
import Home from "../clientside/screens/Home";
import RegisterForm from "../clientside/screens/RegisterForm";
import ServiceAdd from "../seller/screens/ServiceAdd";
import ServiceDetails from "../clientside/screens/service/ServiceDetails";

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
            },
            {
                path: '/service-de/:id',
                element: <ServiceDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
    {
        path: '/admin',
        element: <Dashboard />,
        children: [
            {
                path: 'customer',
                element: <Customers />,
                loader: () => fetch('http://localhost:5000/user')
            },
            {
                path: 'create-service',
                element: <ServiceAdd />,
            },
        ]
    },
]);

export default routes;