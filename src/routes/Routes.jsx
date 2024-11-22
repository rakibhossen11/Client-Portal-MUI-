import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../admin/layout/Dashboard";
import Customers from "../admin/screens/Customers";
import ClientLayout from "../clientside/layout/ClientLayout";
import Home from "../clientside/screens/Home/Home";
import RegisterForm from "../clientside/screens/Authentication/RegisterForm";
import ServiceAdd from "../seller/screens/ServiceAdd";
import ServiceDetails from "../clientside/screens/service/ServiceDetails";
import ServiceBook from "../clientside/screens/service/ServiceBook";
import Students from "../admin/screens/students/Students";
import StudentProfile from "../admin/screens/students/StudentProfile";
import StudentAdmissionForm from "../admin/screens/students/StudentAdmissionForm";

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
            },
            {
                path: '/service-order/:id',
                element: <ServiceBook />,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    },
    {
        path: '/admin',
        element: <Dashboard />,
        children: [
            {
                path: 'students',
                element:<Students />,
                loader: () => fetch('https://www.freetestapi.com/api/v1/students')
            },
            {
                path: 'studentprofile',
                element:<StudentProfile />,
                // loader: () => fetch('http://localhost:5000/user')
            },
            {
                path: 'studentadmission',
                element:<StudentAdmissionForm />,
                // loader: () => fetch('http://localhost:5000/user')
            },
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