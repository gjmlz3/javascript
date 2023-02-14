//Funcion que calcula la cantidad de ingredientes segun cantidad de personas

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
    alert(`Hola ${nombre_usuario}, bienvenido al sistema de recetas de Hoy Cocino Yo`);
    let opciones_usuario = prompt("Que herramientas desea utilizar? Ingrese 1 para ver nuestras recetas o Ingrese 2 para el calculador de recetas");

    if (opciones_usuario == 1) {
        class receta {
            constructor(nombre, ingredientes, procedimiento) {
                this.nombre = nombre;
                this.ingredientes = ingredientes;
                this.procedimiento = procedimiento;
            }

            get_receta() {
                console.log("--------------------------");
                console.log("Nombre:", this.nombre);
                console.log("Ingredientes:", this.ingredientes);
                console.log("Procedimiento:", this.procedimiento);
            }
        }
        //funcion para calcular recetas, luego multiplicarlas por la cantidad de personas
        function calcular_recetas() {
            let mostrar_receta = prompt("Que receta desea hacer? Guiso de lentejas, Pastel de papas o Ensalada?");
            //Formatea la receta a todas mayusculas y borra los espacios
            let receta_formateada = mostrar_receta.toUpperCase().trim();
            let resultado = lista_recetas.find((receta) => {
                if (receta.nombre.toUpperCase() === receta_formateada) {
                    return receta;
                }
            });

            if (resultado) {
                cantidad_personas = prompt("Para cuantas personas desea cocinar");
                if (cantidad_personas) {
                    if (cantidad_personas != 0) {
                        ingredientes = resultado.ingredientes;
                        console.log("Total de ingredientes a Utilizar: ");
                        let claves = Object.keys(ingredientes);
                        //For dentro de for para llegar a las cantidades de los ingredientes para poder utilizarlos
                        for (let i = 0; i < claves.length; i++) {
                            let ingrediente = ingredientes[claves[i]];
                            let clave_ingrediente = Object.keys(ingrediente);
                            console.log(`----------${claves[i]} -------------`);
                            //muestra ingredientes totales segun personas
                            for (let i = 0; i < clave_ingrediente.length; i++) {
                                console.log(
                                    `${clave_ingrediente[i]} : ${ingrediente[clave_ingrediente[i]] * cantidad_personas
                                    }`
                                );
                                
                            }
                            //Muestra procedimiento receta
                            console.log(resultado.procedimiento);
                        }
                    } else { console.log("Usted ha ingresado un valor incorrecto") };
                } else {
                    console.log("Usted no ha ingresado ningun valor");
                }
            } else {
                console.log("La receta ingresada no es correcta");
            }
        }

        //Recetas almacenadas en el sistema
        let lista_recetas = [];

        let guiso = new receta(
            "Guiso de lentejas",
            (ingredientes = {


                carnes: {
                    chorizo: 50,
                    panceta: 50,
                    roastbeef: 150
                },
                vegetales: {
                    Aceite: 10,
                    cebolla: 100,
                    morron: 100,
                    //clave compuesta
                    "aji molido": 5,
                    pimenton: 5,
                    oregano: 5,
                    lentejas: 150,
                    papas: 150,
                    "pure de tomates": 200,
                    sal: 5,
                },
            }
            ),
            procedimiento = ["Calentar el aceite en una cacerola grande.", "Agregar el chorizo pelado y cortado en rodajas, la panceta cortada en cubitos y la carne cortada en cubos chicos o tiritas.", "Dejar que empiecen a largar jugos y grasa. A los cinco minutos, añadir la cebolla y el morron limpios y cortados en brunoise.", "Codimentar con el aji molido, el pimenton y el oregano.", "Mezclar para que se integren los sabores y se ablanden la cebolla y el morron.", "Incorporar las lentejas, las papas peladas y cortadas en cubos chios, el pure de tomate y dos tazas grandes de agua caliente.", " Mezclar bien. Cocinar por cinco minutos y verificar la sazon.", "Continuar la coccion a uego suave hasta que las lentejas esten tiernas y el guiso haya perdido el ochenta po ciento de su parte liquida"]
        )
        lista_recetas.push(guiso);
        let pastel = new receta(
            "Pastel de papas",
            (ingredientes = {


                ingredientes: {
                    papas: 100,
                    cebolla: 250,
                    huevo: 1,
                    "carne picada": 150,
                },
                varios: {
                    leche: 150,
                    manteca: 10,
                    "nuez moscada": 2,
                    aceite: 20,
                    "sal gruesa": 5,
                    pimenton: 10,
                    "aji molido": 5,
                    oregano: 10,
                    comino: 5,
                    pimienta: 5,

                },
            }
            ),
            procedimiento = ["Hervir las papas peladas y cortadas en trozos en una olla con abundante agua ligeramente salada.", "Cuando esten tiernas, eliminar el agua de coccion. Agregar, de a poco, la leche caliente y aplastarlas con el pisapapas hasta lograr un buen pure.", "Incorporar la manteca, perfumar con la nuez moscada y revolver con un cucharon de madera hasta lograr un pure de textura firme (no dura), lisa y homogenea.", "Reservar", "Calentar el aceite a fuego mediano en una cacerola o sarten grande y rehogar la cebolla cortada en brunoise chica.", "Cuando este transparente, agregar la sal gruesa.", "Mezclar y añadir y la carne picada.", "Cocinar hasta que la carne cambie de color (cuando este mas oscura)", "En ese momento, condimentar con el pimenton, el aji molido, el oregano, el comino y la pimienta", "Mezclar bien para que los ingreientes se integren a la carne. Cocinar por cinco minutos mas a fuego muy suave.", "Revolver bien, apagar el fuego y dejar entibiar.", "Luego, colocar el picadilo de carne en el fondo de una fuente de barro y espolvorear con el huevo picado.", "Cubrir con el pure y dorar en horno muy caliente por entre cinco y diez minutos.", "Servir"]
        )
        lista_recetas.push(pastel);

        let ensalada = new receta(
            "Ensalada",
            (ingredientes = {


                base: {
                    rucula: 25,
                    lechuga: 25,
                    espinaca: 25,
                },
                opcionales: {
                    cherry: 50,
                    palta: 1,
                    huevo: 1,
                    pollo: 100,
                },
            }
            ),
            procedimiento = ["Limpiar todos los vegetales", "Cortar las hojas verdes", "Cortar los cherry", "Hervir el pollo con sal", "Cortar la palta en cubos", "cortar el huevo en octavos"]
        );
        lista_recetas.push(ensalada);
        calcular_recetas();
    }
    if (opciones_usuario == 2) {
        let nombre_receta = prompt("Ingrese nombre receta");
        let personas = prompt("Ingrese CANTIDAD de PERSONAS, en numeros");
        personas = parseInt(personas);
        let cantidad_ingredientes = prompt("Ingrese CANTIDAD de INGREDIENTES en numero");
        cantidad_ingredientes = parseInt(cantidad_ingredientes);

        if (personas, cantidad_ingredientes && nombre_receta != "") {
            console.log("Ud va a preparar", nombre_receta);
            //El for va a dar las vueltas segun la cantidad de ingredientes que ingrese el usuario
            for (let vuelta = 0; vuelta < cantidad_ingredientes; vuelta++) {
                let nombre_ingrediente = prompt("Ingrese NOMBRE ingrediente");
                let gramos_ingrediente = prompt("Ingrese CANTIDAD en GRAMOS para una porcion");
                let total_gramos = total_cantidad(gramos_ingrediente, personas);
                console.log("Ud necesita", total_gramos, " gramos, de ", nombre_ingrediente);
            }

        }
        //si no ingresa todos los datos el programa no continua
        else {
            console.log("No ingreso todos los datos solicitados");
        }



    }
 
}



