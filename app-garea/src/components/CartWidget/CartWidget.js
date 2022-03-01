import { BsCart4 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
	import './CartWidget.css'
	
	const CartWidget =({contador='0'})=>{
	    return(
            <div>
	              <NavLink to={'/cart'}><BsCart4 className="btnCart" /><span>{contador}</span></NavLink>
                  
            </div>
	    )
	}

	export default CartWidget
