import React, {useEffect} from "react";
import "./Home.scss";
import {useSelector, useDispatch} from "react-redux";
import Loading from "../../components/loading/Loading";
import Card from "../../components/card/Card";
import {fetchDataReducer} from "../../Redux/services/fetchDataSlice";

export default function Home() {
   const fetchData = useSelector((state) => state.fetchDataReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchDataReducer());
      console.log("running");
   }, [dispatch]);

   if (fetchData.status === "loading") {
      return <Loading />;
   }

   return (
      <div className="home_container">
         {fetchData.status === "failed" && <h1>{fetchData.error}</h1>}
         {fetchData.data.map((item) => {
            return <Card item={item} key={item.id} />;
         })}
      </div>
   );
}
