import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProducts } from '../mock/products'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getProducts().then(item => {
            setProduct(item.find(producto => producto.id === 2))
        }).catch(err  => {
            console.log(err)
        })

        

    }, [])


    return (
        <div className="Detalle" >
            <ItemDetail  product={product}/>
        </div>
    )    
}
export default ItemDetailContainer