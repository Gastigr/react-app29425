import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
// import { getProducts } from '../mock/products'
import { useParams } from 'react-router-dom'
import {getDoc , doc}   from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const {productId} =useParams ()
    const [loading, setLoading] = useState(true)
    

   useEffect(()=>{
    setLoading (true)
    const docRef = doc(firestoreDb, 'products', productId)


    getDoc(docRef).then(response => {
        const product = {id: response.id, ...response.data}
        setProduct(product)
    }).finally(()=>{
        setLoading(false)
    } )



    return(() =>{
        setProduct()
    })






    //    getProducts()
    //    .then((producto)=>{
    //        setProduct(producto.find(product => product.id === parseInt(productId)))
    //    })
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





    // return (
    //     <div className="Detalle" >
    //         <ItemDetail  product={product}/>
    //     </div>
    // )    

export default ItemDetailContainer