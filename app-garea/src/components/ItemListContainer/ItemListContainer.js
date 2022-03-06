import './itemListContainer.css'
// import ItemCount from "../ItemCount/ItemCount"
// import { getProducts} from '../mock/products'
import  { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection,query, where} from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'


const ItemListContainer = ({greeting}) =>{

    // const handleOnAdd = (quantity) => {
    //     console.log(`Se agregaron ${quantity} productos`)
    // }
    const [products, setProducts] = useState([])
    
    const [loading, setLoading] =  useState (true)
    const {categoryId} = useParams()
    

    useEffect(()=>{
       setLoading(true)


        const collectionRef = categoryId ?
        query(collection(firestoreDb,'products'), where('categoria', '==',categoryId )) :
        collection(firestoreDb, 'products')

       getDocs(collectionRef).then(response =>{
           
           const products = response.docs.map(doc =>{
               
               return{id: doc.id, ...doc.data()}
               
           })
           setProducts(products)
       })    

        .finally(()=>{
             setLoading(false)
        })
        return(()=>{
            setProducts()
        })
 
    },[categoryId])
    

    return(
        <>
        <h1>{greeting}</h1>
        <div className="ItemListContainer">
            {/* <ItemCount stock={5} initial={0} onAdd={handleOnAdd}/> */}
        </div>
        {loading ? <h2>Estamos Cargando los Productos....</h2> : <ItemList products={products} />}
        </>
        
    );
}

export default ItemListContainer