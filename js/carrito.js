/*import { mostrarProductos, productosDisponibles} from "./app.js"
JSON.parse(sessionStorage. getItem("carrito"))=== null && sessionStorage.setItem("carrito", JSON.stringify([]))

let carrito = JSON.parse(sessionStorage.getItem("carrito"))===[]

export const agregarAlCarrito =(idProducto) => {

    const producto = productosDisponibles.find((producto) => producto.id === idProducto)

    const{ imagen, nombre, laboratorio, descripcion, cantidad, id} = producto

    const productoCarrito = carrito.find((producto)=> producto.id ===idProducto)
    if(productoCarrito===undefined){
        const nuevoProductoCarrito = {
            id: id,
            imagen: imagen,
            nombre: nombre,
            laboratorio: laboratorio,
            descripcion: descripcion,
            cantidad: 1,
        }
        carrito.push(nuevoProductoCarrito);
        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }else{
        const indexProductoCarrito = carrito.findIndex((producto)=> producto.id === idProducto)

        carrito[indexProductoCarrito].cantidad++

        sessionStorage.setItem("carrito", JSON.stringify(carrito))
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"));
    alert("Usted agregó la vacuna ${nombre}");
    console.log(carrito);
}*/
