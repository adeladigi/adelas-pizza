import React from "react";


function Card(props){
    
    return(
        <div className="card-menu">

        <img src={props.img} alt="">
        </img>

        <div className="info-div">
          <h3>{props.title}</h3> <a href="#">More Info</a>
        </div>
      </div>
    )
}

export default Card;