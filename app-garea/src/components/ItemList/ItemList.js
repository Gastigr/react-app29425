import Item from "../Item/Item"
import "./ItemList.css"


const ItemList = ({products}) =>{
    return(
        <>  
            <div className="CardItem">
                {products.map((product)=> (
               <Item products={product} key={product.id} /> 
                ))}     
            </div>
            
        </>
    )
}
export default  ItemList