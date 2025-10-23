import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";

const route= createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement:<ErrorPage />,
    children: [
        {
    index: true,
    element: <Home />
  },
   {
    path: '/products',
    element: <Products />
  },
    ]

  },
 
])
export default route;