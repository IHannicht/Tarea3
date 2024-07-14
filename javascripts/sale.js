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
    const selectedProduct = listaProductos.options[listaProductos.selectedIndex].text;
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
    let detallesProductos = ""

    for (let indice = 0 ; indice < carrito.length ; indice++) {
        //obtener el precio del producto y la cantidad
        const precioProducto = carrito[indice]; //los precios estan alojados en el array carrito
        const cantidadProducto = 1; //cantidad es el array 1

        //calcular el subtotal
        const subtotalProducto = precioProducto * cantidadProducto;

        //sumar el subtotal a la suma total
        suma += subtotalProducto;

        //obtener el nombre del producto 
        const nombreProducto = listaProductos.options[indice].text;

        //agg detalles del producto a la cadena 
        detallesProductos += `\nProducto: ${nombreProducto} \nCantidad: ${cantidadProducto} unidades\nSubtotal: ${subtotalProducto} yenes\n`;
    }

    //calcular el importe total
    console.log (suma)
    importetotal = suma //+ descuento (suma) 
    tarifaEnvio = descuento(suma)
    window.alert (`
        Detalles de la compra: \n${detallesProductos} \n\nLa tarifa de envio es de ${tarifaEnvio} yenes\nEl importe total es de ${importetotal} yenes
        `) //imprimir tarifa de envio y total 
    carrito = [] //vaciar el carrito
})


