import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AddProduct from "../admin/AddProduct";
import SingleProduct from "../components/SingleProduct";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`).then((res) =>
            res.json()
          ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
