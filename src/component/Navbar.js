import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    
   <ul>
      <li><NavLink to="/Home" style={({isActive})=>{return{backgroundColor: isActive ?'red':' '}}}>HOME</NavLink></li>
      <li><NavLink to="/Signup" style={({isActive})=>{return{backgroundColor: isActive ?'red':' '}}}>SIGN UP</NavLink></li>
      <li><NavLink to="/Login" style={({isActive})=>{return{backgroundColor: isActive ?'red':' '}}}>LOGIN</NavLink></li>
    </ul>
   </>
  );
}
export default Navbar;   