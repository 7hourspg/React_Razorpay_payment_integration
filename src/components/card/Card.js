import React from "react";
import {BiSolidCart} from "react-icons/bi";
import {BsFillCartPlusFill, BsFillCartDashFill} from "react-icons/bs";
import {IoBagCheckOutline} from "react-icons/io5";
import "./Card.scss";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";

import {
   addToCart,
   removeFromCart,
   incrementQuantity,
   decrementQuantity,
} from "../../Redux/cartSlice";

function Card({item, toggleHandler}) {
   const location = useLocation();
   const dispatch = useDispatch();

   const titleCateString = (str) => {
      if (str.length > 20) {
         return str.slice(0, 20) + "...";
      }
      return str;
   };

   const desCateString = (str) => {
      if (str.length > 100) {
         return str.slice(0, 100) + "...";
      }
      return str;
   };

   return (
      <div className="card">
         <img className="card_img" src={item.image} alt={item.title} />
         <div className="card_info">
            <h3 className="card_title">{titleCateString(item.title)}</h3>
            <p className="card_desc">{desCateString(item.description)}</p>
            {location.pathname === "/cart" ? (
               <>
                  <p className="card_price">
                     <small>$</small>
                     <strong>
                        {item.totalPrice ? item.totalPrice : item.price}
                     </strong>
                  </p>
                  <div
                     style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                        marginTop: "10px",
                     }}
                     className="quantity_btn_container"
                  >
                     <button
                        className="quantity_btn"
                        onClick={() =>
                           item.quantity > 1
                              ? dispatch(decrementQuantity(item))
                              : dispatch(removeFromCart(item))
                        }
                     >
                        <BsFillCartDashFill size={20} />
                     </button>
                     <p className="card_quantity">Quantity: {item?.quantity}</p>

                     <button
                        className="quantity_btn"
                        onClick={() => dispatch(incrementQuantity(item))}
                     >
                        <BsFillCartPlusFill size={20} />
                     </button>
                  </div>
               </>
            ) : (
               <>
                  <p className="card_price">
                     <small>$</small>
                     <strong>{item.price}</strong>
                  </p>
                  <div className="card_rating">
                     {Array(item.rating)
                        .fill()
                        .map((_, i) => (
                           <p key={i}>⭐</p>
                        ))}
                  </div>
               </>
            )}
         </div>
         <div className="button_container">
            {location.pathname === "/cart" ? (
               <button
                  onClick={() => toggleHandler(item)}
                  className="card_button"
               >
                  <IoBagCheckOutline size={20} />
                  <span>Checkout now</span>
               </button>
            ) : (
               <button
                  className="card_button"
                  onClick={() => dispatch(addToCart(item))}
               >
                  <BiSolidCart size={30} />
                  <span>Add to Cart</span>
               </button>
            )}
         </div>
      </div>
   );
}

export default Card;
