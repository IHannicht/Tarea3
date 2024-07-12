const listaProductos = document.getElementById ("product"); 
const cantidadProducto = document.getElementById ("number");
const botonAgregar = document.getElementById ("add");
const botonTotal = document.getElementById ("subtotal");

let carrito = []
function descuento (a) {
    if (a < 2000) {
        return 500
    } else if (a >= 2000 && a < 3000) {
        return 250
    } else {
        return 0
    }  
}
botonAgregar.addEventListener("click", e=> {
    carrito.push(listaProductos.value * cantidadProducto.value)
    console.log(carrito)
    // obtener la seleccion de los nombres y cantidades de cada producto
    const selectedProduct = listaProductos.value;
    const selectedQuantity = cantidadProducto.value;

    // formato de los detalles del producto
    const productDetails = `Producto agregado:\n${selectedProduct}: ${selectedQuantity} unidades`;

    // Display el alert con los detalles de los productos agregados
    window.alert(productDetails);
})


botonTotal.addEventListener("click", e=> {
    let suma = 0
    let importetotal = 0
    let tarifaEnvio = 0

    for (let indice = 0 ; indice < carrito.length ; indice++) {
        suma += carrito [indice]
    }
    console.log (suma)
    importetotal = suma //+ descuento (suma) 
    tarifaEnvio = descuento(suma)
    window.alert (`
        La tarifa de envio es de ${tarifaEnvio} guaranies 
        El importe total es de ${importetotal} guaranies
        `) //imprimir tarifa de envio y total 
    carrito = [] //vaciar el carrito
})


