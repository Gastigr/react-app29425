import { useState,  } from 'react'

import './ItemCount.css'



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

            <div className='Botones'>
                <button className='BntIncre'  onClick={increment}>+</button>
                <button className='BtnDecre'  onClick ={decrement}>-</button>
                <button aling="center" onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>

            
            
        
        </>
    )
}

export default ItemCount