// import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './CartWidget.css'
import { useContext } from 'react'

const CartWidget = () =>{

	const { getCantidad } = useContext(CartContext)
	return(
		<div>
			  <NavLink to={'/cart'}><BsCart4 className="btnCart" />{getCantidad}</NavLink>
			  
		</div>
	)

}






	

	export default CartWidget
