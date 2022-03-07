import './ItemDetail.css';
import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ prod }) => {
    const [qty, setQty] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setQty(cantidad);
        addToCart(prod, cantidad);
        
    };







return(
    <div className="Producto">
                <div className="Card">
                    
                    {/* <h2>Marca: {prod.marca}</h2> */}
                    <p>Color: {prod.color}</p>
                    <p>Categoria: {prod.categoria}</p>
                    <p>Nombre: {prod.nombre}</p>
                    <p>Material: {prod.material}</p>
                    <p>Precio: {prod.precio}€</p>
                    



                    
                    {qty === 0 ? (
                    <ItemCount stock={prod.stock} onAdd={onAdd} />
                ) : (
                    <Link  to="/cart">
                        Ir al carrito
                    </Link>
                )}
                </div>

                
            </div>
            
    )
}   

export default ItemDetail