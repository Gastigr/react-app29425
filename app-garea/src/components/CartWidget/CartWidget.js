// import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
import './CartWidget.css'

const CartWidget = () =>{


	return(
		<div>
			  <NavLink to={'/cart'}><BsCart4 className="btnCart" />0</NavLink>
			  
		</div>
	)

}






	

	export default CartWidget
