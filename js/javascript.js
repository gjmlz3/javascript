function total_cantidad(gramos_ingrediente, personas) {

    gramos_ingrediente = parseInt(gramos_ingrediente);
    personas = parseInt(personas);



    let total_cantidad = gramos_ingrediente * personas;

    if (total_cantidad > 0) {

        return total_cantidad
    }

    else {
        return console.log("No se puede cocinar para 0 personas");
    }
}
let nombre_usuario = prompt("ingrese nombre usuario");

if (nombre_usuario) {
    console.log("Bienvenido al calculador de recetas de Hoy Cocino Yo", nombre_usuario);

    let nombre_receta = prompt("Ingrese nombre receta");
    let personas = prompt("Ingrese CANTIDAD de PERSONAS, en numeros");
    personas = parseInt(personas);
    let cantidad_ingredientes = prompt("Ingrese CANTIDAD de INGREDIENTES en numero");
    cantidad_ingredientes = parseInt(cantidad_ingredientes);

    if (personas, cantidad_ingredientes && nombre_receta != "") {
        console.log("Ud va a preparar", nombre_receta);
        for (let vuelta = 0; vuelta < cantidad_ingredientes; vuelta++) {
            let nombre_ingrediente = prompt("Ingrese NOMBRE ingrediente");
            let gramos_ingrediente = prompt("Ingrese CANTIDAD en GRAMOS para una porcion");
            let total_gramos = total_cantidad(gramos_ingrediente, personas);
            console.log("Ud necesita", total_gramos, " gramos, de ", nombre_ingrediente);
        }

    }
    else {
        console.log("No ingreso todos los datos solicitados");
    }



}
else { console.log("No ingreso su nombre, por favor vuelva a intentarlo") }



