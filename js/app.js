// boceto de proyecto: carro de compras para ecommerce
let modeloElegido = Number(prompt("Seleccione el modelo que te gustaria comprar : 1) Reme THE CREW 2) Reme THE NEXT PARTY 3) Reme TIGER KING    " ))
class Remeras {
    constructor(modeloElegido , nombre, categoria, stock, candidadComprada) {
        this.modeloElegido =modeloElegido
        this.nombre = nombre;
        this.categoria = categoria;
        this.stock = stock;
        this.cantidad = candidadComprada;
    } 
controlStock(){
            if(this.cantidad > this.stock){
                
                alert("No contamos con sufiente stock de este pruducto")
                modeloElegido = Number(prompt("Seleccione el modelo que te gustaria comprar : 1) Reme THE CREW 2) Reme THE NEXT PARTY 3) Reme TIGER KING    " ))
                cantidadComprada = Number(prompt("Ingrese la cantidad a comprar"));                
            }
            else if (this.cantidad < this.stock && this.cantidad > 0 && this.modeloElegido <= 3) {
                    alert("La cantidad ingresada es: " + this.cantidad);

                    this.stock = this.stock - this.cantidad
                }
            else {
                    alert("Usted ingreso una cantidad negativa o modelo inexistente, eso es incorrecto")
                    modeloElegido = Number(prompt("Seleccione el modelo que te gustaria comprar : 1) Reme THE CREW 2) Reme THE NEXT PARTY 3) Reme TIGER KING    " ))
                    cantidadComprada = Number(prompt("Ingrese la cantidad a comprar"));

                }
    }
}
let cantidadComprada = Number(prompt("Ingrese la cantidad a comprar"));

const objeto1 = new Remeras ( "reme THE CREW", "remeras", 15, cantidadComprada);


let valorTotal = parseInt(prompt("Ingrese el monto total de su compra:"));
let descuentoAplicar = parseInt(prompt("Ingrese el porcentaje de descuento que posee:"));

let montoFinal = aplicarDescuento(valorTotal, descuentoAplicar);

function aplicarDescuento(total, porcentajeDescuento) {
    let descuento = (porcentajeDescuento * total) / 100;
    let totalConDescuento = total - descuento;
    return totalConDescuento;
}



alert("El monto final a abonar es $ " + montoFinal);
console.log(objeto1.controlStock());
console.log(objeto1);
console.log("valor de compra: $" + montoFinal + "El modelo elegido es el numero : " + modeloElegido);