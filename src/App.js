import React, {useState} from "react";
import './App.css';

import NavBar from "./NavComponents/NavBar";
import SideNav from "./SideNavComponents/SideNav";
import BottomNav from "./NavComponents/BottomNav";
import MenuShowCase from "./MenuShowCase";
import MenuTitle from "./MenuTitle";
import pizzaMenu from "./pizzaMenu";
//import drinksMenu from "./drinksMenu";

function App() {


const [showMenu, setShowMenu] = useState(false)

if(showMenu === true){
  const body = document.body.style="overflow-y: hidden"
}else{
  // do nothing
}


function sideMenuClicked(){
  if(showMenu === false){
    setShowMenu(true);
    
  }else if(showMenu === true){
    setShowMenu(false)
    
    
  }
}


  return (
<div>
 <NavBar sideMenuClicked={sideMenuClicked}/>
 <SideNav showMenu={showMenu} sideMenuClicked={sideMenuClicked} />
 <BottomNav />
 <MenuTitle />
 <MenuShowCase menu={pizzaMenu} />
 
</div>
  );
}

export default App;
