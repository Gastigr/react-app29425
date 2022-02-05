import { BsCart4 } from "react-icons/bs";
import './CartWidget.css'


const CartWidget =({handLeClick, contador='0'})=>{
    return(
        <button className="btnCart" onClick={handLeClick}><BsCart4/><span>{contador}</span></button>
    )
}


export default CartWidget


