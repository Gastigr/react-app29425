import "./Item.css"
import { Link } from "react-router-dom" 

const Item = ({product}) => {
    return(
        <>
            <div className="Producto">
                <div className="Card">
                    <img className="ImgCard" src={product.img} alt={product.nombre}/>
                    <h4> {product.nombre}</h4>
                    <p>Precio: {product.precio}€</p>
                    <Link to={`/detail/${product.id}`}>Ver Detalle</Link>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Item