export const products =[
    {   id:1, 
        marca: "FESTINA", 
        nombre:"SPECIAL EDITIONS F20524/1",
        color: "Azul", 
        material: "ACERO INOX",
        precio: 500, 
        categoria:"HOMBRE", 
        stock: 4,
        img:"https://res.cloudinary.com/gasgarea/image/upload/v1644773780/img/f20524_1_ndgvof.png",
    },
    {
        id:2,
        marca:"FESTINA",
        nombre:"BOYFRIEND F16721/2", 
        color:"Rosa", 
        material:"ACERO",
        precio: 500,
        categoria:"MUJER",
        stock : 4,
        img:"https://res.cloudinary.com/gasgarea/image/upload/v1644773781/img/f16721_2_jash6k.png"
    },


];


 export const traerProductos = new Promise((resolve,  reject) =>{
    setTimeout(()=>{
        resolve(products)
    },2000)
})
