import { BsCart4 } from "react-icons/bs";
	import './CartWidget.css'
	
	const CartWidget =({contador='0'})=>{
	    return(
             <div>
	              <BsCart4 className="btnCart" /><span>{contador}</span>
                  
             </div>
	    )
	}

	export default CartWidget
