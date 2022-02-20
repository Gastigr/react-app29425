import './itemListContainer.css'
// import ItemCount from "../ItemCount/ItemCount"
import { getProducts} from '../mock/products'
import  { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) =>{

    // const handleOnAdd = (quantity) => {
    //     console.log(`Se agregaron ${quantity} productos`)
    // }
    const [products, setProducts] = useState([])
    
    const [loading, setLoading] =  useState (true)
    const {categoryId} = useParams()
    

    useEffect(()=>{
        getProducts()
        .then((respuesta)=>{
            if(categoryId === undefined){setProducts(respuesta)
                
            }else{setProducts(respuesta.filter(products => products.categoria === categoryId)
            )}
        
        })
        
        .catch((error)=>{
            
        })
        .finally(()=>{
            setLoading(false)
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
};


export default ItemListContainer