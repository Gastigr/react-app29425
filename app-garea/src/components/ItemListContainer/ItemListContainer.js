import './itemListContainer.css'
import  { useState,useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import {  getProducts } from '../../services/firebase/firebase'


const ItemListContainer = ({greeting}) =>{

   
    const [products, setProducts] = useState([])
    
    const [loading, setLoading] =  useState (true)
    const {categoryId} = useParams()
    

    useEffect(()=>{
       setLoading(true)
        getProducts(categoryId).then(response =>{
            setProducts(response)
        }).catch(() =>{
    
        

       
       }).finally(()=>{
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
            
        </div>
        {loading ? <h2> Cargando los Productos....</h2> : <ItemList products={products} />}
        </>
        
    );
    }

export default ItemListContainer