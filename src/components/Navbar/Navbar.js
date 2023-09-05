import React from "react";
import "./Navbar.scss";
import {Link, NavLink, useLocation} from "react-router-dom";
import {BiSolidCart} from "react-icons/bi";
import {useSelector} from "react-redux";

function Navbar() {
   const cartValue = useSelector((state) => state.cartReducer);
   const location = useLocation();

   return (
      <div className="nav_Container">
         <nav className="nav">
            <div className="logo_container">
               <Link to="/">
                  <h1 className="logo_text">Shoper</h1>
               </Link>
            </div>
            <ul className="nav_list">
               <li className="nav_list_item">
                  <NavLink
                     className={({isActive}) =>
                        isActive ? "nav_link active" : "nav_link inactive"
                     }
                     to="/"
                  >
                     Home
                  </NavLink>
               </li>

               <li className="nav_list_item">
                  <NavLink
                     className={({isActive}) =>
                        isActive ? "nav_link active" : "nav_link inactive"
                     }
                     to="/about"
                  >
                     About
                  </NavLink>
               </li>

               <li className="nav_list_item">
                  <NavLink
                     className={({isActive}) =>
                        isActive ? "nav_link active" : "nav_link inactive"
                     }
                     to="/contact"
                  >
                     Contact
                  </NavLink>
               </li>
            </ul>
            <div
               style={
                  location.pathname == "/cart"
                     ? {visibility: "hidden"}
                     : {visibility: "visible"}
               }
               className="cart_icon_container"
            >
               <BiSolidCart size={30} className="cart_icon" />
               <div className="cart_number">
                  <p>{cartValue.length}</p>
               </div>
               <div className="checkoutbx">
                  <Link to="/cart">
                     <button className="checkoutbtn">Checkout</button>
                  </Link>
               </div>
            </div>
         </nav>
      </div>
   );
}

export default Navbar;
