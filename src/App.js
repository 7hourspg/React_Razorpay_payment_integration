import React from "react";
import {RouterProvider} from "react-router-dom";
import Home from "./Pages/home/Home";
import {createBrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "./components/footer/Footer";
import About from "./Pages/about/About";
import Contact from "./Pages/contact/Contact";
import "./App.scss";
import Cart from "./Pages/cart/Cart";

function App() {
   // Routes

   const Layout = () => {
      return (
         <div className="main">
            <Navbar />
            <div className="contentContainer">
               <Outlet />
            </div>
            <Footer />
         </div>
      );
   };

   const router = createBrowserRouter([
      {
         path: "/",
         element: <Layout />,
         children: [
            {
               path: "/",
               element: <Home />,
            },
            {
               path: "/about",
               element: <About />,
            },
            {
               path: "/contact",
               element: <Contact />,
            },
            {
               path: "/cart",
               element: <Cart />,
            },
         ],
      },
   ]);

   return <RouterProvider router={router} />;
}

export default App;
