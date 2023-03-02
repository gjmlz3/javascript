//Funcion que calcula la cantidad de ingredientes segun cantidad de personas

function total_cantidad(gramos_ingrediente, personas) {

    gramos_ingrediente = parseInt(gramos_ingrediente);
    personas = parseInt(personas);
    let total_cantidad = gramos_ingrediente * personas;
    if (total_cantidad > 0) {
        return total_cantidad
    }
}



//el usuario entra al sitio y pide el nombre para luego mostrarselo en pantalla
function entrar() {
    let nombre_usuario = document.getElementById("nombre").value;
    if (nombre_usuario != null && nombre_usuario != "") {
        localStorage.setItem("nombre", nombre_usuario);
    }
    if (nombre_usuario) {
        // declaracion de recetas una vez que el usuario ingresa su nombre  
        class receta {
            constructor(nombre, ingredientes, procedimiento) {
                this.nombre = nombre;
                this.ingredientes = ingredientes;
                this.procedimiento = procedimiento;
            }
        }

        let lista_recetas = [];

        let guiso = new receta(
            "guiso",
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
            "pastel",
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
            "ensalada",
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
        //se almacena el usuario en el localStorage y luego se recupera para mostrarlo en pantalla
        let nombre_usuario_almacenado = localStorage.getItem("nombre")
        //primer render del html
        document.body.innerHTML = `
        <h1>Bienvenido/a al sistema ${nombre_usuario_almacenado}</h1>   
        <div>
          <h2>Que herramienta desea utilizar?</h2>
          <select name="" id="select">
            <option value=""></option>
            <option value="1">Nuestras Recetas</option>
            <option value="2">Calculador de recetas</option>
          </select>
        </div>
        <a href="index.html">Volver</a>
      `;
        //se almacena la opcion elegida por el usuario para luego tomar deciciones
        let opciones_usuario = document.getElementById("select");

        opciones_usuario.addEventListener("change", function (e) {
            if (e.target.value == 1) {
                //segundo render del html preguntando que desea cocinar, aparecen 3 input radio y se almacena mediante el target
                document.body.innerHTML = `
                <div class="logo">
                  <img src="./assets/images/LogoNegro.png" alt="logo" width="100" height="100">
                </div>
                <div class="titulo">
                  <h1>¿Qué desea cocinar?</h1>
                </div>
                <div class="recetas">
                  <label>Elija una opción:</label><br>
                  <input type="radio" name="opcion_unica" value="guiso" >Guiso de lentejas<br>
                  <input type="radio" name="opcion_unica" value="pastel">Pastel de papa<br>
                  <input type="radio" name="opcion_unica" value="ensalada">Ensalada<br><br>
                  <label for="">¿Para cuántas personas desea cocinar?</label>
                  <input type="text" name="" id="cantidad">
                  <button id="btn_receta">Tengo Hambre</button>
                </div>
              `;
                // se captura el boton receta y la opcion elegida
                let btn_receta = document.getElementById('btn_receta');
                btn_receta.addEventListener('click', function () {
                    let opciones = document.getElementsByName("opcion_unica")


                    let receta_seleccionada = '';

                    // Recorremos los radio buttons para encontrar el seleccionado
                    for (let i = 0; i < opciones.length; i++) {
                        if (opciones[i].checked) {
                            receta_seleccionada = opciones[i].value;
                            break;
                        }
                    }


                    //filtramos la receta para poder obtener los ingredientes
                    let resultado = lista_recetas.filter((receta) => {
                        if (receta.nombre.toString() === receta_seleccionada.toString()) {
                            return receta;

                        }

                    })
                    //desestruturacion
                    const { nombre, ingredientes, procedimiento } = resultado[0];

                    // se captura la cantidad de personas para poder multiplicar por la cantidad de ingredientes
                    let cantidad_personas = document.getElementById('cantidad').value;
                    if (!isNaN(cantidad_personas) && cantidad_personas !== '' && cantidad_personas !== '0') {
                        cantidad_personas = parseInt(cantidad_personas);
                       //ocultamos el resultado anterior para que no se acumulen en pantalla
                        let resultado_anterior = document.querySelector('.resultado');
                        if (resultado_anterior) {
                            resultado_anterior.remove();
                        }
                        // si se cumplen las condiciones anteriores creamos una tabla con ingredientes y cantidad ingredientes

                        if (cantidad_personas) {
                            let receta_mostrar = document.createElement('div');
                            receta_mostrar.classList.add('resultado');
                            let tabla = document.createElement('table');
                            let encabezado_tabla = `
                                <tr>
                                    <th>Ingredientes</th>
                                    <th>Cantidad en gr</th>
                                </tr>
                            `;
                            tabla.innerHTML = encabezado_tabla;
                            //almacenamos en la variable claves los ingredientes para poder usarlos
                            let claves = Object.keys(ingredientes);
                            for (let i = 0; i < claves.length; i++) {
                                let ingrediente = ingredientes[claves[i]];
                                let clave_ingrediente = Object.keys(ingrediente);
                                //por cada vuelta del for se crea una fila y columna de los ingredientes de la receta
                                for (let j = 0; j < clave_ingrediente.length; j++) {
                                    let cantidad = ingrediente[clave_ingrediente[j]] * cantidad_personas;
                                    let fila = `
                                        <tr>
                                            <td>${clave_ingrediente[j]}</td>
                                            <td>${cantidad}</td>
                                        </tr>
                                    `;
                                    tabla.innerHTML += fila;
                                }
                            }
                            //creamos un parrafo
                            let procedimiento_parrafo = document.createElement('p');
                            procedimiento_parrafo.innerText = procedimiento;
                            // lo agregamos al html   
                            receta_mostrar.appendChild(tabla);
                            receta_mostrar.appendChild(procedimiento_parrafo);

                            document.body.appendChild(receta_mostrar);

                        }
                        // si no se cumple alguna condicion anterior, enviamos un alert, me parecio la mejor manera de avisarle al usuario
                    } else {
                        alert('Valor incorrecto');

                    }
                });
            }
            if (e.target.value == 2) {
                // Aqui arranca el calculador de recetas
                //tercer render del html
                document.body.innerHTML = `<div class="logo">
                <img src="./assets/images/LogoNegro.png" alt="logo" width="100" height="100">
              </div>
                <div class="calculador">
                <label>Complete todos los campos</label><br>
                <label for="">Ingrese nombre receta</label>
                <input type="text" id="nombre_receta"><br>
                <label for="">Ingrese cantidad personas</label>
                <input type="number" id="personas"><br>
                <label for="">Ingrese cantidad ingredientes</label>
                <input type="number" id="cantidad_ingredientes"><br>
                <button id="btn_ingredientes">Ingresar Ingredientes</button><br><br><br>
              </div>
              <br><br><br>
              `;
                let btn_ingredientes = document.getElementById('btn_ingredientes');

                btn_ingredientes.addEventListener('click', () => {

                    let nombre_receta = document.getElementById('nombre_receta').value;
                    let personas = document.getElementById('personas').value;
                    let cantidad_ingredientes = document.getElementById('cantidad_ingredientes').value;


                    if (personas && cantidad_ingredientes && nombre_receta != "") {

                        let inputsHtml = '';

                        //El for va a dar las vueltas según la cantidad de ingredientes que ingrese el usuario y crear los input necesarios
                        for (let vuelta = 0; vuelta < cantidad_ingredientes; vuelta++) {
                            inputsHtml += `<label for="">Ingrese NOMBRE ingrediente:</label><br>
                            <input type="text" id="ingrediente${vuelta + 1}_nombre"><br>
                            <label for="">Ingrese CANTIDAD en GRAMOS para una porción:</label><br>
                            <input type="number" id="ingrediente${vuelta + 1}_cantidad"><br>`;
                        }
                        inputsHtml += `<button id="btn_calcular"> Calcular</button><br><br><br>`
                        // Agregamos los inputs generados al HTML
                        document.querySelector('.calculador').innerHTML += inputsHtml;

                        // Escuchamos el evento click del botón calcular
                        let btn_calcular = document.getElementById('btn_calcular');
                        btn_calcular.addEventListener('click', () => {

                            const resultados = document.createElement('div');
                            document.body.appendChild(resultados);
                            // Obtenemos los valores de los ingredientes ingresados

                            for (let vuelta = 0; vuelta < cantidad_ingredientes; vuelta++) {
                                let nombre_ingrediente = document.getElementById(`ingrediente${vuelta + 1}_nombre`).value;
                                let gramos_ingrediente = document.getElementById(`ingrediente${vuelta + 1}_cantidad`).value;
                                let total_gramos = total_cantidad(gramos_ingrediente, personas);
                                // Creamos un elemento para mostrar el resultado del ingrediente actual
                                let resultado_ingrediente = document.createElement('p');
                                resultado_ingrediente.textContent = `Ud necesita ${total_gramos} gramos de ${nombre_ingrediente}`;
                                resultados.appendChild(resultado_ingrediente);
                            }


                        });

                    }
                    //un alert para avisarle que no completo todos los datos
                    else { alert("No ingreso todos los datos solicitados") }

                });



                //aca termina el codigo de la funcion (nota mental)
            }
        });
        ;
    }
}


let btn_usuario = document.getElementById("btn_usuario");
btn_usuario.addEventListener("click", entrar);






