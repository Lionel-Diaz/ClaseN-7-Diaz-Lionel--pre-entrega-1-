/* Funcion para saber stock de productos */
function stock_producto() {
    
    let producto_stock 
    let resultado_iva = 0
    function precio_iva(precio_barritas, iva) {
        resultado_iva = precio_barritas * iva
    }
    
while (producto_stock != "salir") { 
    
    producto_stock = prompt("ingrese el sabor de su barrita")
    switch (producto_stock) {
        case "frutilla":
        if (producto1.stock == "disponible") {
            alert("El producto se encuentra en stock")
            precio_iva(producto1.precio, 1.25)
            alert("El precio de la barrita mas iva es de: " + resultado_iva);
        }else{
            alert("El producto no se encuentra en stock")
        }
        break;
    case "chocolate":
        if (producto2.stock == "disponible") {
            alert("El producto se encuentra en stock")
            precio_iva(producto2.precio, 1.25)
            alert("El precio de la barrita mas iva es de: " + resultado_iva);
        }else{
            alert("El producto no se encuentra en stock")
        }
        break;
    case "vainilla":
        if (producto3.stock == "disponible") {
            alert("El producto se encuentra en stock")
            precio_iva(producto3.precio, 1.25)
            alert("El precio de la barrita mas iva es de: " + resultado_iva);
        }else{
            alert("El producto no se encuentra en stock")
        }
        break;
    case "coco":
        if (producto4.stock == "disponible") {
            alert("El producto se encuentra en stock")
            precio_iva(producto4.precio, 1.25)
            alert("El precio de la barrita mas iva es de: " + resultado_iva);
        }else{
            alert("El producto no se encuentra en stock")
        }
        break;
    case "mani":
        if (producto5.stock == "disponible") {
            alert("El producto se encuentra en stock")
            precio_iva(producto5.precio, 1.25)
            alert("El precio de la barrita mas iva es de: " + resultado_iva);
        }else{
            alert("El producto no se encuentra en stock")
        }
        break;
        case "marroc":
            if (producto6.stock == "disponible") {
                alert("El producto se encuentra en stock")
                precio_iva(producto6.precio, 1.25)
                alert("El precio de la barrita mas iva es de: " + resultado_iva);
            }else{
                alert("El producto no se encuentra en stock")
            }
            break;
            case "salir":
                alert("Muchas gracias por su tiempo, ¡Nos vemos¡")
                break;
                
    default:
        alert("el producto ingresado no existe, intentelo nueva mente")
        break;
    }
} 
}


/* Creamos clase costructora de los produtos */
class Producto{
    constructor(nombre, tipo, sabor, precio, stock){
        this.nombre = nombre.toUpperCase();
        this.tipo = tipo.toUpperCase();
        this.sabor = sabor.toUpperCase();
        this.precio = precio;
        this.stock = stock;
    }

}


/* Asignamos valores a los objetos */
const producto1 = new Producto("barrita Olympic","energetica", "frutilla", 120, "disponible");
const producto2 = new Producto("barrita Olympic","energetica", "chocolate", 120,"disponible");
const producto3 = new Producto("barrita Olympic","energetica", "vainilla", 120,"disponible");
const producto4 = new Producto("barrita Olympic","energetica", "coco", 120,"no disponible");
const producto5 = new Producto("barrita Olympic","energetica", "mani", 120,"no disponible");
const producto6 = new Producto("barrita Olympic","energetica", "marroc", 120,"disponible");

/* Creamos array de los productos*/
const productos=[producto1, producto2, producto3, producto4, producto5, producto6];

/* Llamamos a la funcion "stock_producto" */
stock_producto()

/* metodos */
console.log(productos);
console.log(productos.join(" - "));
console.log(productos.length); 

/* Metodos avanzados */
productos.forEach((producto) => {
    console.log(producto);
})

console.log( productos.some ((el) => el.nombre == "barrita dionisio"));