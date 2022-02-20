import './NavBar.css'
import './img.css'
import Button from '../Button/Button';
import CartWidget from '../CartWidget/CartWidget';




const Navbar = () =>{
    const handLeHombre = ()=>{
        console.log('handLeHombre')

    }

    const handLeMujer =() =>{
        console.log('handLeMujer') 
    }


    return(
        <nav className='NavBar'>
          <div>
            <img src={'./img/logo_fest.png'} className='logo' alt='logo'></img>   
          </div>
          
            <Button label='Hombre' handLeClick={handLeHombre}  />
            <Button label='Mujer' handLeClick={handLeMujer} />
            
            <CartWidget />
        </nav>
    )
}

export default Navbar