import "./Item.css"

const Item = ({product}) => {
    return(
        <>
            <div className="Producto">
                <div className="Card">
                    <img className="ImgCard" src={product.img} alt={product.nombre}/>
                    <h4> {product.nombre}</h4>
                    <p>Precio: {product.precio}€</p>
                    
                    
                </div>
            </div>
        </>
    )
}

export default Item