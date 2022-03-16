import React, { useContext , useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import { Timestamp, addDoc, collection } from 'firebase/firestore'
 import { firestoreDb } from '../../services/firebase/firebase'

export default function Cart(){
      const{ cart,  removeItem, getTotal, clear} = useContext(CartContext);
      const [processingOrder, setProcessingOrder] = useState(false);
      const [orderId, setOrderId] = useState('');



      const[contact, ] = useState({
          name: '',
          phone: '',
          address: '',
          comment: ''
      });

      const confirmOrder = () =>{
          if( 
              contact.phone !== '' &&
              contact.name !== '' &&
              contact.address !== '' &&
              contact.comment!== '--'  
             
          ) {
              setProcessingOrder(true)


              const objOrder ={
                  buyer: contact,
                  items: cart,
                  total: getTotal,
                  date: Timestamp.fromDate(new Date ()),
              };
              addDoc(collection(firestoreDb, 'orders'),objOrder).then((doc)=>{
                  setOrderId(doc.id)
                  clear()
              });
            }
    }

    if (orderId !== '') {
       return(
         <>
        
           <h1>Su numero de order es {orderId}</h1>
            <NavLink to ='/'>Volver al Home</NavLink> 
           </>
       )
    }

    return( 

      <div>
          <h2>CART</h2>
          <ul>
            {cart.length <= 0 ?(
                <>
                  <p>
                    No hay nada en su carrito de compras 😞
                  </p>
                  
                </>
            ):(
              cart.map((prod) => (
                <li key={prod.id}>
                    <img
                      className="ImgCard"
                      src={prod.img}
                      alt={prod.nombre}
                    />
                    <p>Nombre: {prod.nombre}</p>
                    <p>Precio: {prod.precio}€</p>
                    <p>Cantidad: {prod.cantidad}</p>
                  
                    <button onClick={()=> removeItem(prod.id)}>Remove</button>

                </li>
              ))
            )}
          </ul>
          <from action="">
            <input type="text"/>
          </from>
          <button onClick={() => clear()}>Borrar el carrito</button>
          
          <button onClick={() => confirmOrder()} className="Button"> {processingOrder ?  ' Generando ordern':'Confirmar'}</button>
          
          
          <NavLink to={'/'}>Seguir comprando!</NavLink>
      </div>
    );
    
}












































// export default function Cart() {




// const { cart, removeItem, getTotal, clear} = useContext(CartContext);
// const [processingOrder, setProcessingOrder] = useState(false)
// const [orderId , setOrderId] = useState('');


// const [contact, setContact] = useState({
//   name: 'User',
//   phone: '123456',
//   address: 'UserAdress',
//   comment: '--'
// });


// const confirmOrder = () =>{
//   if(
//     contact.phone !== '' &&
//     contact.name !== '' &&
//     contact.address !== '' &&
//     contact.comment !== '' &&
//   )};
//     setProcessingOrder(true);

//     const objOrder = {
//       buyer : contact,
//       items :  cart, 
//       total : getTotal(),
//       date : Timestamp.fromDate(new Date()),
      
//     };
//     addDoc(collection(firestoreDb, 'orders'), objOrder).then((doc) =>{
//       setOrderId(doc.id)
//       clear()
    
//     });













//   };  

//     if (orderId !== ''){
//       return(
//         <>
    
//            <h1>Su numero de order es {orderId}</h1>
//            < Link to ='/'>Volver al Home</Link> 
//         </>
//       )
//     }


//   return (
//     <>
//       <h1>Cart</h1>
//       <ul>
//         {cart.length <= 0 ? (
//           <>
//             <p>No items in cart</p>
//             <NavLink to="/">
//               <p>Volver a la tienda</p>
//             </NavLink>
//             </>
//           ) : ( 
//             cart.map((prod) => (
//               <li key={prod.id}>
//                 <img className="ImgCard" src={prod.img} alt={prod.nombre}/>
//                 <p>Nombre: {prod.nombre}</p>
//                 <p>Precio: {prod.precio}€</p>
//                 <p>Cantidad: {prod.cantidad}</p>
//                <button onClick={() => removeItem(prod.id)}>Remove</button>
//               </li>
//             ))
//           )}
//         </ul>

//         <h3>Total: ${getTotal()}</h3>
//         <button onClick={() => confirmOrder()} className="Button">{processingOrder ? 'Generando orden' : 'Confirmar'} </button>
        
//       </>
      
      
// )
