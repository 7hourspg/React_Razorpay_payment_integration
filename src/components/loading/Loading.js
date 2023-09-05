import React from "react";
import {TailSpin} from "react-loader-spinner";

function Loading({label}) {
   console.log(label);
   return (
      <>
         <TailSpin
            height="90"
            width="90"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "300px",
            }}
            visible={true}
         />
         <h1>{label}</h1>
      </>
   );
}

export default Loading;
