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
                <p>Volver a la tienda</p>
              </NavLink>
            </>
          ) : ( 
            cart.map((prod) => (
              <li key={prod.id}>
                <p>{prod.nombre}</p>
                <p>{prod.precio}</p>
                <p>{prod.cantidad}</p>
                <p>{prod.color}</p>
                <p>{prod.material}</p>  
                
                <button onClick={() => removeItem(prod.id)}>Remove</button>
              </li>
            ))
          )}
        </ul>
              
        
      </div>    
    );
  }

