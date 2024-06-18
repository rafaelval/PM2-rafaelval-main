const CarritoCompra = require("../index")

describe('CarritoCompra', () => {
      let carrito;
    
      beforeEach(() => {
        carrito = new CarritoCompra();
      });
    
      it('debería inicializarse como un array vacío', () => {
        expect(carrito.productos).toEqual([]);
      });
    
      it('debería agregar productos al carrito', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.productos).toEqual([
          { nombre: 'Producto 1', precio: 100 },
          { nombre: 'Producto 2', precio: 200 },
        ]);
      });
    
      it('debería calcular el total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.calcularTotal()).toEqual(300);
      });
    
      it('debería aplicar un descuento al total de la compra', () => {
        carrito.agregarProducto({ nombre: 'Producto 1', precio: 100 });
        carrito.agregarProducto({ nombre: 'Producto 2', precio: 200 });
        expect(carrito.aplicarDescuento(10)).toEqual(270);
      });
    });