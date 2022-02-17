import './itemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"
import { getProducts} from '../mock/products'
import  { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) =>{

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }
    const [products, setProducts] = useState([])
    const [loading, setLoading] =  useState (true)


    useEffect(()=>{
        getProducts()
        .then((respuesta)=>{
            setProducts(respuesta)
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    

    return(
        <>
        <h1>{greeting}</h1>
        <div className="ItemListContainer">
            <ItemCount stock={5} initial={0} onAdd={handleOnAdd}/>
        </div>
        {loading ? <h2>Estamos Cargando los Productos....</h2> : <ItemList products={products} />}
        </>
        
    );
};


export default ItemListContainer