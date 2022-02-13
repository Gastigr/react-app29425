import "./Item.css"

const Item = ({products}) => {
    return(
        <>
            <div className="Producto">
                <div className="Card">
                    <img className="ImgCard" src={products.img} alt={products.nombre}/>
                    <h4> {products.nombre}</h4>
                    <p>Marca: {products.marca}</p>
                    <p>Color: {products.color}</p>
                    <p>Precio: {products.precio}€</p>
                    <p>Material: {products.material}</p>
                    <p>Categoria: {products.categoria}</p>
                </div>
            </div>
        </>
    )
}

export default Item