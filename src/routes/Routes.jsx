import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../admin/layout/Dashboard";
import Customers from "../admin/screens/Customers";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />,
        children: [
            {
                path: 'customer',
                element: <Customers />,
            }
        ]
    }
]);

export default routes;