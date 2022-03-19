import './NavBar.css'
import './img.css'

import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';




const Navbar = () =>{
   


    return(
        <nav className='NavBar'>
            <div>
                <NavLink to={'/'}><img  src={'./img/logo_fest.png'} className='logo' alt='logo'></img></NavLink>
            </div>
            <div>
                <NavLink to={'/category/Hombre'}  className={({isActive}) => isActive ? 'ActiveBtnCategoria':'BtnCategoria'}>Hombre</NavLink>
                <NavLink to={'/category/Mujer'}  className={({isActive}) => isActive ? 'ActiveBtnCategoria':'BtnCategoria'}>Mujer</NavLink>
                <NavLink to={'/cart'}></NavLink>
            </div>
            
            
            <div>
               <CartWidget /> 
            </div>
            
        </nav>
    )
}

export default Navbar