import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom'
import {  getProductsById } from '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} =useParams ()
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
    setLoading (true)
        getProductsById(productId).then(response =>  {
            setProduct(response)

        }).finally(()=>{
        setLoading(false)
    } )
    return(() =>{
        setProduct()
    })
    },[productId])
   
   
   return (
    <div className="Detalle" >
        { 
            loading ? 
                <h1>Cargando...</h1> :
            product ? 
                <ItemDetail  {...product} /> :
                <h1>El producto no existe</h1> 
        }
    </div>
)    
}
export default ItemDetailContainer