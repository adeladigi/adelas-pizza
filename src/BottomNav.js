import React, {useState} from "react"
import "./BottomNav.css";



function BottomNav(){
const [currentPage, setCurrentPage] = useState("MENU");

function handlePage(event){
 const button = event.target.innerText;
 setCurrentPage(button)
}

  return(
      <div className="bottom-nav">
        <h3 className={currentPage === "MENU" ? "current-page" : ""} onClick={handlePage} >MENU</h3>
        <h3 className={currentPage === "ABOUT" ? "current-page" : ""} onClick={handlePage} >ABOUT</h3>
        <h3 className={currentPage === "ORDER" ? "current-page" : ""} onClick={handlePage} >ORDER</h3>
      </div>
    )
}



export default BottomNav;