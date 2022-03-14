








































import React, { useContext , useState, useRef} from 'react';
import { CartContext } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import ContactForm from '../ContacForm/ContactForm';
import { Timestamp,doc, getDoc } from 'firebase/firestore'
import Togglable from '../Togglable/Togglable'
import { firestoreDb } from '../../services/firebase/firebase'

export default function Cart() {




const { cart, removeItem, getTotal} = useContext(CartContext);
const [processingOrder, setProcessingOrder] = useState(false)


const [contact, setContact] = useState({
  name: '',
  phone: '',
  address: '',
  comment: ''
})

 const confirmOrder = () => {
  if(contact.phone !== '' && contact.address !== '' && contact.comment !== '' && contact.name !== '') {
      setProcessingOrder(true)
      
      const objOrder = {
          buyer: contact,
          items: cart,
          total: getTotal(),
          date: Timestamp.fromDate(new Date())
      }}


      


// const contactFormRef = useRef()

    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {cart.length <= 0 ? (
            <>
              <p>No items in cart</p>
              <NavLink to="/">
                <p>Volver a la tienda</p>
              </NavLink>
            </>
          ) : ( 
            cart.map((prod) => (
              <li key={prod.id}>
                <img className="ImgCard" src={prod.img} alt={prod.nombre}/>
                <p>Nombre: {prod.nombre}</p>
                <p>Precio: {prod.precio}€</p>
                <p>Cantidad: {prod.cantidad}</p>
               
                
                <button onClick={() => removeItem(prod.id)}>Remove</button>


                


              </li>
            ))
          )}
        </ul>
        <h3>Total: ${getTotal()}</h3>
        <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>
        
                        
                




       
        
      </div>    
      
    )
            }}
