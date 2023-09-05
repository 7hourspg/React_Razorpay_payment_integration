import React from "react";
import "./Cart.scss";
import {useSelector} from "react-redux/es/hooks/useSelector";
import Card from "../../components/card/Card";

function Cart() {
   const cartData = useSelector((state) => state.cartReducer);
   console.log(cartData);
   return (
      <div className="cart_container">
         {cartData.map((item) => {
            return <Card item={item} key={item.id} />;
         })}
      </div>
   );
}

export default Cart;
