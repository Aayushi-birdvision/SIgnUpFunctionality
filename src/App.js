import React from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Signup from "./Form-Details/Signup";
import Login from "./component/Login";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import DynamicTable from "./component/DynamicTable";
import User from "./component/User";

function App() {
  return(
    <BrowserRouter> 
      <Navbar />
      <Routes>
        <Route path ="/Home" element={<Home/>}/>  
        <Route  path="/Signup"  element={<Signup  />}/>
        <Route path ='/Login' element={<Login/>}/>
        <Route path ='/DynamicTable' element={<DynamicTable/>}/>  
        <Route path ='/user' element={<User/>}/>
      </Routes>   
    </BrowserRouter>  
  );
}
export default App;

