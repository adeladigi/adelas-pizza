import React from "react";



function Card(props){


  function infoRequest(){
    
    props.sendInfoFunc(props);
  }
    
    return(
        <div className="card-menu">

        <img src={props.img} alt="">
        </img>

        <div className="info-div">
          <h3>{props.title}</h3> 
          <button onClick={infoRequest} type="button" class="btn btn-dark btn-sm">More Info</button>
        </div>
      </div>
    )
}

export default Card;