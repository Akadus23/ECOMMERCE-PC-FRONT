import axios from "axios"
export const ADD_CARRITO = 'ADD_CARRITO'
export const REMOVE_CARRITO = 'REMOVE_CARRITO'
export const BUSCAR_PERSONAJE_ID = 'BUSCAR_PERSONAJE_ID'
export const PRECIO_TOTAL = 'PRECIO_TOTAL'
export const SUMAR_CARRITO = 'SUMAR_CARRITO'
export const RESTAR_CARRITO = 'RESTAR_CARRITO'

export const buscarId = (id)=>{
    return async function(dispatch){
        try {
        const resApi = await axios(`http://localhost:3001/products/${id}`)
         if(resApi.data){
         return dispatch({
                type:BUSCAR_PERSONAJE_ID,
                payload:resApi.data
            })
        }
        } catch (error) {
            console.log(error);
        }  
    }
}
export const addCarrito = (char) =>{
    const response = {...char}

    return {
        type:ADD_CARRITO,
        payload:response,
    }
}
export const precioInicial = (carrito)=>{
    let total = 0
    carrito.map(ele=>{
        total +=ele.precioproducto
    })
    return {
        type:PRECIO_TOTAL,
        payload:total
    }
}
export const sumarCarrito = (valor)=>{
    return{
        type:SUMAR_CARRITO,
        payload:valor
    }
}
export const restarCarrito = (valor)=>{
    return{
        type:RESTAR_CARRITO,
        payload:valor
    }
}
export const removeCarrito = (id) =>{
    return {
        type:REMOVE_CARRITO,
        payload:id
    }
}
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"


export function usuarioID(sub){
    return async function (dispatch) {
        const json = await axios(`/usuarios/${sub}`)
        return dispatch({
            type: "USUARIO_ID",
            payload: json.data
        })
    }
}

export const getProductos = () =>{
    return async function(dispatch){
        try {
            const json = await axios.get('http://localhost:3001/products')
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: json.data.productos
            })
        } catch (error) {
            console.log(error);
        }
    }
}