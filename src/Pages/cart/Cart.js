import React from "react";
import "./Cart.scss";
import {useSelector} from "react-redux/es/hooks/useSelector";
import Card from "../../components/card/Card";

function Cart() {
   const [item, setItem] = React.useState({});
   const cartData = useSelector((state) => state.cartReducer);
   console.log(cartData);
   const [toggle, setToggle] = React.useState(false);

   const toggleHandler = (item) => {
      setItem(item);
      setToggle(true);
   };
   console.log(item);
   
   // const titleCateString = (str) => {
   //    if (str?.length > 20) {
   //       return str.slice(0, 20) + "...";
   //    }
   //    return str;
   // };

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
