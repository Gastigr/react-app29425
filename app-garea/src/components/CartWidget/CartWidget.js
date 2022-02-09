import { BsCart4 } from "react-icons/bs";
	import './CartWidget.css'
	
	const CartWidget =({contador='0'})=>{
	    return(
             <>
	              <BsCart4 className="btnCart" />
                  <span>{contador}</span>
             </>
	    )
	}

	export default CartWidget


