import { useState,  } from 'react'
import {FaPlusSquare  } from "react-icons/fa";
import {FaMinusSquare} from "react-icons/fa";



const ItemCount = ({stock = 1, initial = 1, onAdd}) => {
    const [count, setCount] = useState(initial) 
    const increment = () => {

        count < stock && setCount(count + 1);
       
    };

    const decrement = () => {
        count > initial && setCount(count - 1 ) ;

    };
    return(
        <>  
            
            <h3>{count}</h3>
            <button aling="right" onClick={increment}><FaPlusSquare /></button>
            <button aling="left"  onClick ={decrement}><FaMinusSquare/></button>
            <button aling="center" onClick={() => onAdd(count)}>Agregar al carrito</button>
            
        
        </>
    )
}

export default ItemCount