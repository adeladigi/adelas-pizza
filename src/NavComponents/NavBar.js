import React from "react";
import "./NavBar.css";

function NavBar(props){

function showSideMenu(){
    props.sideMenuClicked()
}

function NavMenuClicked(event) {
  const menuName = event.target.innerText;
    props.newMenuChosen(menuName)
}


    return(
      <nav>
        <h3 id="nav-logo" className="nav-item">Adela's Pizza</h3>
        <div className="menu-selection-div"> <h3 onClick={NavMenuClicked}>Pizza's</h3> <h3 onClick={NavMenuClicked}>Papadia's</h3> <h3 onClick={NavMenuClicked}>Side's</h3> <h3 onClick={NavMenuClicked}>Desserts</h3> <h3 onClick={NavMenuClicked}>Drinks</h3>  </div>
        <i onClick={showSideMenu} className="fas fa-bars nav-item"></i>
      </nav>
    )
}


export default NavBar;