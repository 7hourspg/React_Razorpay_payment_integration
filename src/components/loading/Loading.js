import React from "react";
import {TailSpin} from "react-loader-spinner";

function Loading() {
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
      </>
   );
}

export default Loading;
