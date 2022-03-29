import { createContext, useEffect, useState } from 'react';

 export const CartContext = createContext();

 export const CartContextProvider = ({ children }) => {
     const [cart, setCart] = useState([]);
    
    

     useEffect(() => {
        
     }, [cart]);

    
     const addToCart = (item, cantidad) => {
         isInCart(item.id)
             ? sumarCantidad(item, cantidad)
             : setCart([...cart, { ...item, cantidad }]);
     };

    
     const isInCart = (id) => {
         return cart.some((producto) => producto.id === id);
     };

     const removeItem = (id) => {
         let newCart = cart.filter((prod) => prod.id !== id);
         setCart(newCart);
       
         
     };
    
       const clear = () => {
         setCart([]);
       };
    
     const sumarCantidad = (item, cantidad) => {
         const newProducts = cart.map((prod) => {
             if (prod.id === item.id) {
                const newProduct = {
                     ...prod,
                     cantidad: prod.cantidad + cantidad,
                 };
                 return newProduct;
             } else {
                 return prod;
             }
         });
         setCart(newProducts);
     };


     const getTotal = () => {
        let total = 0
        cart.forEach(product => {
            total = total + product.precio * product.cantidad
        })
        return total
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach(product => {
            count = count + product.cantidad
        })
        return count
    }

    
   

     return (
         <CartContext.Provider value={{ cart, addToCart,getQuantity, getTotal, removeItem, clear,}}>
             {children}
         </CartContext.Provider>
     );
 };




