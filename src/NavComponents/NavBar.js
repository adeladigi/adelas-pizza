import React from "react";
import "./NavBar.css";

function NavBar(props){
    
function showSideMenu(){
    
    
    props.sideMenuClicked()
}

    return(
      <nav>
        <h3 id="nav-logo" className="nav-item">Adela's Pizza</h3>
        <i onClick={showSideMenu} className="fas fa-bars nav-item"></i>
      </nav>
    )
}


export default NavBar;