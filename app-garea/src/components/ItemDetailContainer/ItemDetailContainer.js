import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProducts } from '../mock/products'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProducts().then(item => {
            setProduct(item.find(producto => producto.id === 1))
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