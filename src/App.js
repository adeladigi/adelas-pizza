import React, {useState} from "react";
import './App.css';

import NavBar from "./NavComponents/NavBar";
import SideNav from "./SideNavComponents/SideNav";
import BottomNav from "./NavComponents/BottomNav";
import MenuShowCase from "./MenuShowCase";
import MenuTitle from "./MenuTitle";
import pizzaMenu from "./pizzaMenu";
import papadiaMenu from "./papadiaMenu";
import dessertMenu from "./dessertMenu";
import sidesMenu from "./sidesMenu";
import drinksMenu from "./drinksMenu";
//import drinksMenu from "./drinksMenu";

function App() {


const [showMenu, setShowMenu] = useState(false)
const [menuTitle, setMenuTitle] = useState("Pizza Menu")
const [currentMenu, setCurrentMenu] = useState(pizzaMenu)

if(showMenu === true){
  const body = document.body.style="overflow-y: hidden";
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

function newMenuChosen(menu){
  if(menu === "PIZZA"){
    setCurrentMenu(pizzaMenu);
  }else if(menu === "PAPADIAS"){
    setCurrentMenu(papadiaMenu);
  }else if(menu === "DESSERTS"){
    setCurrentMenu(dessertMenu);
  }else if(menu === "SIDES"){
    setCurrentMenu(sidesMenu);
  }else if(menu === "DRINKS"){
    setCurrentMenu(drinksMenu);
  }
  
}


  return (
<div>
 <NavBar sideMenuClicked={sideMenuClicked}/>
 <SideNav showMenu={showMenu} newMenuChosen={newMenuChosen} sideMenuClicked={sideMenuClicked} />
 <BottomNav />
 <MenuTitle title={menuTitle} />
 <MenuShowCase menu={currentMenu} />
 
 <div className="body-blank">
 </div>

</div>
  );
}

export default App;
