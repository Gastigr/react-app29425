import './NavBar.css'
import './img.css'
import { BsCart4 } from "react-icons/bs";

const Navbar = () =>{
    return(
        <nav className='NavBar'>
          <img src={'./img/logo_fest.png'} className='logo' alt='logo'></img>
            <button className='Option'>Hombre</button>
            <button className='Option'>Mujer</button>
            <button className='Option'><BsCart4 /></button>
        </nav>
    )
}

export default Navbar