import './itemListContainer.css'
import ItemCount from "../ItemCount/ItemCount"

const ItemListContainer = ({greeting}) =>{

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos`)
    }
    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemCount stock={10} initial={2} onAdd={handleOnAdd}/>
        </div>
    )
}


export default ItemListContainer