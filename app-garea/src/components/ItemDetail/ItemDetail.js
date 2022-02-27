import './ItemDetail.css';
import React, {useState, useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ product }) => {
    const [qty, setQty] = useState(0);
    const { addToCart } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setQty(cantidad);
        addToCart(product, cantidad);
        
    };







return(
    <div className="Producto">
                <div className="Card">
                    <img className="ImgCard" src={product.img} alt={product.nombre}/>
                    <h2>Marca: {product.marca}</h2>
                    <p>Color: {product.color}</p>
                    <p>Categoria: {product.categoria}</p>
                    <p>Nombre: {product.nombre}</p>
                    <p>Material: {product.material}</p>
                    <p>Precio: {product.precio}€</p>
                    



                    
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