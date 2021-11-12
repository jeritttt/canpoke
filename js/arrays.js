// boceto de proyecto ; pagina de tatuajes, donde se pueda solicitar turno y ver precios aproximados dependiendo de diseño.
let listaPrecio = []
let eleccion;
while (eleccion !== 4) {

    const productos = `Cual es tu duda?:
            1 - Precio aproximado de mi tattoo
            2 - Solicitar turno
            3 - Cuidados
            4 - Salir `;
    eleccion = Number(prompt(productos));


    if ( eleccion < 4 && eleccion > 0) {
        switch (eleccion) {
            case 1:
                const diseño = prompt("Que diseño tenes en mente?");
                const tamaño = prompt("De que tamañao (centimetros) queres que sea?");
                const lugar = prompt("En que parte del cuerpo lo queres?");
                const turno = "Pendiente";

                const precio = {
                    diseño,
                    tamaño,
                    lugar,
                    turno
                };
                listaPrecio.push(precio);
                break;
            case 2:
                const definirTurno = prompt("Ingrese la fecha deseada (DD/MM) y cuando se le confirme el turno coordinaremos horario:");
                const index = listaPrecio.findIndex(precio => precio.turno.toLocaleLowerCase() === definirTurno.toLocaleLowerCase());
                if (index > -1) {
                    definirTurno[index].turno = "fecha reservada";
                } else {
                    alert("Esta fecha no se encuentra disponible");
                }
                break;
            case 3:
                for (let precio of listaPrecio) {
                    console.log(`Diseño: ${precio.diseño} -- Tamaño: ${precio.tamaño} -- Lugar: ${precio.lugar} -- Turno: ${precio.turno}`);
                    break;
                    default: 
                    break;
                }
        }

    } else if (eleccion == 4) {
        alert("Gracias por visitar CAN POKE");
    } else {
        alert("La opcion ingresada es incorrecta");
    }
}