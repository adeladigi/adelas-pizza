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
  if(menu === "PIZZA" || menu === "Pizza's"){
    setCurrentMenu(pizzaMenu);
    setMenuTitle("Pizza Menu")
  }else if(menu === "PAPADIAS" || menu === "Papadia's"){
    setCurrentMenu(papadiaMenu);
    setMenuTitle("Papadias Menu")
  }else if(menu === "DESSERTS" || menu ===  "Desserts"){
    setCurrentMenu(dessertMenu);
    setMenuTitle("Dessert Menu")
  }else if(menu === "SIDES" || menu === "Side's"){
    setCurrentMenu(sidesMenu);
    setMenuTitle("Sides Menu")
  }else if(menu === "DRINKS" || menu === "Drinks"){
    setCurrentMenu(drinksMenu);
    setMenuTitle("Beverage Menu")
  }
  
}

function newMenuTitle(menu){
  //setMenuTitle()
}


  return (
<div>
 <NavBar sideMenuClicked={sideMenuClicked} newMenuChosen={newMenuChosen}/>
 <SideNav showMenu={showMenu} newMenuChosen={newMenuChosen} sideMenuClicked={sideMenuClicked} />
 <BottomNav />
 <MenuTitle title={menuTitle} />
 <MenuShowCase newMenuTitle={newMenuTitle} menu={currentMenu} />
 
 <div className="body-blank">
 </div>

</div>
  );
}

export default App;
