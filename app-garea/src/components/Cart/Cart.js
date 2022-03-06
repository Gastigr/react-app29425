import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';

export default function Cart() {
    const { cart, removeItem } = useContext(CartContext);
  
    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {cart.length <= 0 ? (
            <>
              <p>No items in cart</p>
              <NavLink to="/">
                
              </NavLink>
            </>
          ) : ( 
            cart.map((prod) => (
              <li key={prod.id}>
                <p>{prod.nombre}</p>
                <p>{prod.precio}</p>
                <p>{prod.cantidad}</p>
                
                <button onClick={() => removeItem(prod.id)}>Remove</button>
              </li>
            ))
          )}
        </ul>
              
        
      </div>    
    );
  }







// const Cart = () => {

//     const { cart } = useContext(CartContext);
    

//     return (
//         <>
            
            
//             {cart.map((prod) => (
//                 <li key={prod.id}>{prod.cantidad}</li>
                
                
//             ))}



//         </>
//     );
// };

// export default Cart;