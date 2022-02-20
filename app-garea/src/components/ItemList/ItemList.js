import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({products, routing}) =>{
    return(
        <>  
            <article className="CardItem">
                {products.map((product)=> ( <Item product={product} key={product.id}/> 
                ))}     
            </article>
            
            
        </>
        
    )
}
export default  ItemList