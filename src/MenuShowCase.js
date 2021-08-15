import React from "react";

import "./MenuShowCase.css";
import Card from "./Card";




function MenuShowCase(props){


   return(
       <div className="showcase-div">
            
            {props.menu.map(function(item){
           return (
             <Card img={item.img} title={item.title} />
           )
        })} 

       </div>

       
       
   )
}



export default MenuShowCase;