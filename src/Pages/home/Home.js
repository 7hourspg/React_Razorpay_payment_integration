import React, {useEffect} from "react";
import "./Home.scss";
import {useSelector, useDispatch} from "react-redux";
import {decrement, increment} from "../../Redux/createSlice";
import {Link} from "react-router-dom";
import Loading from "../../components/loading/Loading";
import {Data} from "../../components/Data";
import Card from "../../components/card/Card";

export default function Home() {
   const [data, setData] = React.useState([]);

   const counter = useSelector((state) => state.counterReducer.value);
   console.log(counter);
   const dispatch = useDispatch();

   const fetchData = async () => {
      fetch("https://fakestoreapi.com/products")
         .then((res) => res.json())
         .then((json) => setData(json));
   };

   useEffect(() => {
      // fetchData();
   }, []);

   console.log(Data);

   return (
      <div className="home_container">
         {Data.map((item) => {
            return <Card item={item} key={item.id} />;
         })}
      </div>
   );
}
