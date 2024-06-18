class CarritoCompra {
      constructor() {
        this.productos = [];
      }
    
      agregarProducto(producto) {
        this.productos.push(producto);
      }
    
      calcularTotal() {
        let total = 0;
        for (let producto of this.productos) {
          total += producto.precio;
        }
        return total;
      }
    
      aplicarDescuento(porcentaje) {
        if(porcentaje < 0 || porcentaje > 100){
          return "el descuento no puede realizarse"
        }
        let descuento = this.calcularTotal() * (porcentaje / 100);
        return this.calcularTotal() - descuento;
      }
    }

module.exports =CarritoCompra