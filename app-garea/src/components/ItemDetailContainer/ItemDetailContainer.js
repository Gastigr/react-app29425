import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProducts } from '../mock/products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} =useParams ()
    

   useEffect(()=>{
       getProducts()
       .then((producto)=>{
           setProduct(producto.find(product => product.id === parseInt(productId)))
       })
   },[productId])

    return (
        <div className="Detalle" >
            <ItemDetail  product={product}/>
        </div>
    )    
}
export default ItemDetailContainer