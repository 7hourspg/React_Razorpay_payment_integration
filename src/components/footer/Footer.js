import React from "react";
import "./Footer.scss";

function Footer() {
   return (
      <div className="foot_container">
         <div className="foot_content">
            <div className="foot_content_left">
               <h1>Shoper</h1>
               <p>© 2023 Company, Inc.</p>
            </div>
            <div className="foot_content_right">
               <h1>Company</h1>
               <p>About</p>
               <p>Team</p>
               <p>Blog</p>
            </div>
         </div>
      </div>
   );
}

export default Footer;
