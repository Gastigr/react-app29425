import { useState,  } from 'react'
import {FaPlusSquare  } from "react-icons/fa";
import {FaMinusSquare} from "react-icons/fa";



const ItemCount = ({stock = 1, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial) 
    const increment = () => {
        if(count < stock){
            
            setCount(count + 1)
            
        }
    }
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1)

        }
    }
    return(
        <>
            <h3>Producto</h3>
            <h3>{count}</h3>
            <button aling="left"  onClick={() => decrement()}><FaMinusSquare/></button>
            <button aling="center" onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button aling="right" onClick={() => increment()}><FaPlusSquare /></button>
            
        
        </>
    )
}

export default ItemCount