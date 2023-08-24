/* --------------------------- VARIABLES GLOBALES --------------------------- */
// Iniciamos la variable carrito con el contenido de localStorage. Si no hay nada, lo iniciamos como un array vacío
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* -------------------------------- FUNCIONES ------------------------------- */
// FUNCIÓN PARA MOSTRAR LOS PRODUCTOS
const mostrarProductos = (productos) => {
	// Capturo el contenedor donde voy a renderizar los productos
	const contenedorProductos = document.querySelector(".product-list");
	// Limpio el contenedor por si había algo anteriormente
	contenedorProductos.innerHTML = "";
	// Recorro el array y por cada uno creo una card para mostrar en pantalla
	productos.forEach((producto) => {
		const li = document.createElement("li");
		li.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" />
    <h3>${producto.nombre}</h3>
	<p class="product-laboratorio">${producto.laboratorio}</p>
    <p class="product-description">${producto.descripcion}</p>
    <p class="product-stock">${producto.stock}</p>
    <button id="agregar-${producto.id}" class="add-to-cart">Agregar al carrito</button>
    `;
		// Agrego la card al contenedor
		contenedorProductos.appendChild(li);
		// Ahora la card está en el DOM. El botón ya existe, por lo tanto lo capturo
		const boton = document.getElementById(`agregar-${producto.id}`);
		// Agrego evento al botón capturado.
		boton.addEventListener("click", () => {
			// Si hacemos clic en el botón, se agrega al carrito
			agregarAlCarrito(producto.id);
		});
	});
};

// FUNCIÓN PARA AGREGAR EL PRODUCTO AL CARRITO

const agregarAlCarrito = (id) => {
	// Si el producto no está en el carrito, lo agregamos
	if (!carrito.some((producto) => producto.id === id)) {
		// Buscamos el producto en el array de productos
		const producto = productos.find((producto) => producto.id === id);
		// Agregamos el producto al carrito
		carrito.push(producto);
	}
	// Guardamos el carrito en el localStorage para tenerlo actualizado si recargamos la página porque hicimos cambios
	localStorage.setItem("carrito", JSON.stringify(carrito));
	// Actualizamos la vista del carrito porque hemos hecho cambios
	mostrarCarrito();
};

const mostrarCarrito = () => {
	// Capturo el contenedor donde voy a renderizar los productos
	const contenedorCarrito = document.querySelector(".carrito");
	// Limpio el contenedor por si había algo anteriormente
	contenedorCarrito.innerHTML = "";
	// Sólo agregaremos un contenedor con productos si el carrito no está vacío
	if (carrito.length > 0) {
		// Creo el contenedor donde colocaré los productos y lo agrego al DOM
		const productsCart = document.createElement("ul");
		productsCart.classList.add("productsCart");
		contenedorCarrito.appendChild(productsCart);
		// Creo el contenedor donde colocaré el total, lo calculo y lo agrego al DOM
		const contenedorTotal = document.createElement("p");
		actualizarTotal(contenedorTotal);
		contenedorCarrito.appendChild(contenedorTotal);
		// Recorro el array y por cada uno creo una card para mostrar en pantalla
		carrito.forEach((producto) => {
			const li = document.createElement("li");
			li.innerHTML = `
			<img src="${producto.imagen}" alt="${producto.nombre}" />
			<div class="productContent">
				<h3>${producto.nombre}</h3>
				<p class="product-laboratorio>${producto.laboratorio}</p>
				<p class="product-description">${producto.descripcion}</p>
				<p class="product-stock">${producto.stock}</p>
			</div>
			<button id="eliminar-${producto.id}" class="remove">Eliminar</button>
		`;
			// Agrego la card al contenedor
			productsCart.appendChild(li);
			// Ahora la card está en el DOM. El botón ya existe, por lo tanto lo capturo
			const boton = document.getElementById(`eliminar-${producto.id}`);
			// Agrego evento al botón capturado.
			boton.addEventListener("click", () => {
				// Si hacemos clic en el botón, se elimina del carrito
				eliminarProducto(producto.id);
			});
		});
	} else {
		// Si el carrito está vacío, muestro un texto
		contenedorCarrito.innerHTML = '<p class="empty">No hay productos</p>';
	}
};

const eliminarProducto = (id) => {
	// Genero un nuevo carrito con todos los productos menos el que hemos seleccionado
	carrito = carrito.filter((producto) => producto.id !== id);
	// Guardamos el carrito en el localStorage para tenerlo actualizado si recargamos la página porque hicimos cambios
	localStorage.setItem("carrito", JSON.stringify(carrito));
	// Actualizamos la vista del carrito porque hemos hecho cambios
	mostrarCarrito();
};

/* calcular stock*/
const actualizarTotal = (contenedor) => {
	const total = carrito.reduce((acumulador, producto) => acumulador - producto.stock, 0);
	contenedor.textContent = `Total: ${total}`;
};
/*Funcion turnos para vacunación*/
let pedirTurno = 


/*Librerias*/
Toastify({

	text: "Pide turno para vacunación",
	
	duration: 8000
	
	}).showToast();
Swal.fire({
	title: 'Nunca te olvides de vacunarte y vacunar a tus hijos.',
	width: 600,
	padding: '3em',
	color: '#716add',
	background: '#fff url(https://sweetalert2.github.io/#examplesimages/trees.png)',
	backdrop: `
	  rgba(0,0,123,0.4)
	  url("https://sweetalert2.github.io/#examplesimages/nyan-cat.gif")
	  left top
	  no-repeat
	`
  })
/*devolver funciones*/
mostrarProductos(productos);
mostrarCarrito();
