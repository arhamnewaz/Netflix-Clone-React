import React, { useEffect, useState } from "react";
import './Nav.css';

function Nav(){
    const [navbarBlack, setNavbarBlack] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setNavbarBlack(true);
      });
      return () => {
        window.removeEventListener("scroll",null);
      };
    }, []);
    return(
    <div className={`nav ${navbarBlack && "nav__black"}`}>
       <div className="nav__contents">
       <img 
       className="nav__logo" 
       src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
       alt=""/>
       <img 
       className="nav__avatar"
       src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
       alt=""/>
       </div>
     </div>
    );
    }
   


export default Nav