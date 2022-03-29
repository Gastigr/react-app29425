import React, { useContext , useState} from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import { Timestamp, addDoc, collection,  } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/firebase'
import './Cart.css'
export default function Cart(){
      const{ cart,  removeItem, getTotal, clear} = useContext(CartContext);
      const [processingOrder, setProcessingOrder] = useState(false);
      const [orderId, setOrderId] = useState('');



      const[contact, setContact  ] = useState({
          name: '',
          phone: '',
          address: '',
          comment:'',
          
      });
      const handleChange = (e) =>{
       const  {name, value} = e.target

       setContact({
         ...contact,
         [name]:value
       })

      }

      const confirmOrder = () =>{
          if( 
              contact.phone !== '' ||
              contact.name !== '' ||
              contact.address !== '' ||
              contact.comment !== '--'  
             
          ) {
              setProcessingOrder(true)


              const objOrder ={
                  buyer: contact,
                  items: cart,
                  total: getTotal(),
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
      <>  
        <h2>CART</h2>
        <div>
          
          <div>
            {cart.length <= 0 ?(
                <>
                  <p>
                    No hay nada en su carrito de compras 😞
                  </p>
                  
                </>
            ):(
              
              cart.map((prod) => (
                <div  className='itemCart' key={prod.id}>
                    <img
                      className="ImgCard"
                      src={prod.img}
                      alt={prod.nombre}
                    />
                    <p>{prod.nombre}</p>
                    <p>Precio x unidad : {prod.precio}€ </p>
                    <p>Unidad: {prod.cantidad}</p>
                    <p>SubTotal: {prod.precio * prod.cantidad} </p>
                  
                    <button onClick={()=> removeItem(prod.id)}>X</button>
                     

                </div>
              ))
            )}
          </div>
          <div className='FormContact'>
            <from action="">
              <input 
                type="text" 
                name='name'
                placeholder='Name' 
                onChange={handleChange}
                value={contact.name}
              />

              <input 
              type="number" 
              name='phone' 
              placeholder='Phone' 
              onChange={handleChange}
              value={contact.phone}
              />

              <input 
              type="text" 
              name='address' 
              placeholder='Address' 
              onChange={handleChange}
              value={contact.address}
              />

              <input 
              type="text" 
              name='comment' 
              placeholder='Comment' 
              onChange={handleChange}
              value={contact.comment}
              />
            </from>
          </div>
          
          <div>
            <button className='vaciarCart' onClick={() => clear()}>Vaciar el carrito</button>
          
            <h3>Total: {getTotal()}€</h3>
              <button onClick={() => confirmOrder()} disabled={
                  contact.name === '' ||
                  contact.phone === '' ||
                  contact.address  === ''|| 
                  contact.comment === ''
                }
                className="Button">
                {''}
                {processingOrder ?  ' Generando ordern':'Confirmar'}
              </button>
            </div>
          
          
            <NavLink to={'/'}>Seguir comprando!</NavLink>
        </div>
      </>

     
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
