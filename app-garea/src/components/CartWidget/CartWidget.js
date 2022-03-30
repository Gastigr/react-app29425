import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react'
import './CartWidget.css'

const CartWidget = () =>{

	const { getQuantity } = useContext(CartContext)
	return(
		<div>
			  <NavLink to={'/cart'} className="CartWidget">
				<img src="/img/cart.svg" alt='cart' className='CartImg' />
				{getQuantity()}

			  </NavLink>
			  
		</div>
	)

}
export default CartWidget
