 const products =[
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
    {   id:3,
        marca:"FESTINA",
        nombre:"AUTOMATIC F20480/4",
        color: "Negro",
        material: "ACERO INOX",
        precio: 500,
        categoria: "HOMBRE",
        stock: 5,
        img:"https://res.cloudinary.com/gasgarea/image/upload/v1645038753/img/f20480_4_lg5ouv.png",
        },
    {
        id:4,
        marca:"FESTINA",
        nombre:"BOYFRIEND F20399/1",
        color:"Plata",
        material:"ACERO", 
        precio: 500,
        categoria:"MUJER",
        stock: 5,
        img:"https://res.cloudinary.com/gasgarea/image/upload/v1645038759/img/f20399_1_bbjage.png",
    },


];


 export const getProducts = () =>{
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
 }
 export const getProduct = (id) =>{

    return new Promise((resolve) =>{
        
        setTimeout(() => {
            resolve(id)
        }, 2000)
    })
 }


