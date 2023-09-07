import React from "react";
import "./Cart.scss";
import {useSelector} from "react-redux/es/hooks/useSelector";
import Card from "../../components/card/Card";

function Cart() {
   const cartData = useSelector((state) => state.cartReducer);
   const [toggle, setToggle] = React.useState(false);

   const toggleHandler = (item) => {
      setItem(item);
      setToggle(!toggle);
   };

   if (cartData.length === 0)
      return <div className="cart_container">No items in cart</div>;

   return (
      <div className="cart_container">
         {cartData.map((item) => {
            return (
               <Card item={item} key={item.id} toggleHandler={toggleHandler} />
            );
         })}
      </div>
   );
}

export default Cart;
