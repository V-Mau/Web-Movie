const carritoCompra = require('../index');

let carrito;
// Utilizo beforeEach para tener un carrito limpio por cada prueva
// antes de ejecutar la prueba.
beforeEach(() => {
    carrito = new carritoCompra ();
})

it('Empezamos con un carrito vacio', () => {
    expect(carrito.producto.length).toBe(0);
    

})



it('Agragamos productos y retornamos el total', () => {
    carrito.agregarProducto({nombre: 'Producto 1', precio: 10});
    carrito.agregarProducto({nombre: 'Producto 2', precio: 20});
    carrito.agregarProducto({nombre: 'Producto 3', precio: 30});

    expect(carrito.calcularTotal()).toBe(60);

    
})

it('Aplico un descuento al total del carrito', () => {
    carrito.agregarProducto({nombre: 'Producto 1',precio: 10});
    carrito.agregarProducto({nombre: 'Producto 2',precio: 20});
    carrito.agregarProducto({nombre: 'Producto 3',precio: 30});
//  Aplico un descuento del 20% al total del carro
    expect(carrito.aplicarDescuento(20)).toBe(48);
})