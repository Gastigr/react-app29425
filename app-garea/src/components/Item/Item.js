import "./Item.css"

const Item = ({product, routing}) => {
    return(
        <>
            <div className="Producto">
                <div className="Card">
                    <img className="ImgCard" src={product.img} alt={product.nombre}/>
                    <h4> {product.nombre}</h4>
                    <p>Precio: {product.precio}€</p>
                    <button onClick={()=> routing({path:'detail', id:product.id})}>Ver Detalle</button>
                    
                </div>
            </div>
        </>
    )
}

export default Item