import React, {useState} from "react";
import './App.css';

import NavBar from "./NavBar";
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";


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
 

</div>
  );
}

export default App;
