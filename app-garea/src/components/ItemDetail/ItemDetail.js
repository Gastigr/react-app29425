import './ItemDetail.css'

const ItemDetail = ({ product }) => {
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
                    <button>Agregar al carrito</button>
                    
                </div>
            </div>
            
    )
}   

export default ItemDetail