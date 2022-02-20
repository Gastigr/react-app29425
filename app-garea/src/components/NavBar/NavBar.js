import './NavBar.css'
import './img.css'

import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';




const Navbar = () =>{
   


    return(
        <nav className='NavBar'>
            <div>
                <img src={'./img/logo_fest.png'} className='logo' alt='logo'></img>
            </div>
            <div>
                <NavLink to={'/category/hombre'}  className={({isActive}) => isActive ? 'ActiveBtnCategoria':'BtnCategoria'}>Hombre</NavLink>
                <NavLink to={'/category/mujer'}  className={({isActive}) => isActive ? 'ActiveBtnCategoria':'BtnCategoria'}>Mujer</NavLink>
            </div>
            
            
            <div>
               <CartWidget /> 
            </div>
            
        </nav>
    )
}

export default Navbar