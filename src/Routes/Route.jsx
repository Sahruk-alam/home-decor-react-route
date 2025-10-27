import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WISHlIST.JSX";
import ProductsDetails from "../Pages/ProductsDetails";

const route= createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement:<ErrorPage />,
    hydrateFallbackElement:<h2>Loading...</h2>,
    children: [
        {
    index: true,
    element: <Home />,
    loader: () => fetch('./furnitureData.json')
  },
   {
    path: '/products',
    element: <Products />, 
  },
  {
    path: '/wishlist',
    element:<WishList />
  },{
    path: '/product/:id',
    element: <ProductsDetails/>
  }]

  },
 
])
export default route;