import './Button.css'


const Button = ({ label='boton', backgroundColor, colorText, handLeClick}) =>{
    return(
        <button className="btnCategoria" onClick={handLeClick}>{label}</button>
    )
}




export default Button