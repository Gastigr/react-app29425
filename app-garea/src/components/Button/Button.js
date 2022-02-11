import './Button.css'


const Button = ({ label='boton', handLeClick}) =>{
    return(
        <button className="btnCategoria" onClick={handLeClick}>{label}</button>
    )
}




export default Button