import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProducts } from '../mock/products'

const ItemDetailContainer = ({id}) => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProducts(id).then(item => {
            setProduct(item.find(producto => producto.id === id))
        }).catch(err  => {
            console.log(err)
        })

        

    }, [])


    return (
        <article className="Detalle" >
            <ItemDetail  product={product}/>
        </article>
    )    
}
export default ItemDetailContainer