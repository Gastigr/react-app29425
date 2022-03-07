import { createContext, useEffect, useState,} from 'react';

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
        
        console.log(removeItem)
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

    const getQuantity =() =>{
        let totalQ =  0
        cart.forEach(prod=> {
            totalQ = totalQ + prod.cantidad
        })
        return (totalQ) 
    }
   
   

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clear,getQuantity}}>
            {children}
        </CartContext.Provider>
    );
};

