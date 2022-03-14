import './ItemDetail.css';
import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext} from '../../context/CartContext';

const ItemDetail = ({ ...product }) => {
    const [qty, setQty] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setQty(cantidad);
        addToCart(product, cantidad);
        
    };


return(
    <div className="Producto">
                <div className="Card">
                    
                    <h2>{product.marca}</h2>
                    <img className="ImgCard" src={product.img} alt={product.nombre}/>
                    <p>{product.color}</p>
                    
                    <p>{product.categoria}</p>
                    <p>{product.nombre}</p>
                    <p>{product.material}</p>
                    <p>{product.precio}€</p>
                    



                    
                    {qty === 0 ? (
                    <ItemCount stock={product.stock} onAdd={onAdd} />
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