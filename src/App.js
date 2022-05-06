import React from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Navbar from "./component/Navbar";

function App() {
  return(
   
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path ="/Home" element={<Home/>}/>  
        <Route  path="/Signup"  element={<Signup  />}/>
       <Route path ='/Login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
   
  );
}
export default App;

