setTimeout(function () {
    Swal.fire({
        title: 'No te olvides de seguirnos en nuestras redes',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Instagram`,
        denyButtonText: `Facebook`,
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://www.instagram.com/hoycocinoyomdq', '_blank');
        } else if (result.isDenied) {
            window.open('https://www.facebook.com/hoycocinoyomdq', '_blank');
        }
    })
}, 5000);

function mostrar_posicion(posicion) {

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "a3697faf8e560a628aff2c298d7983f3";


    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML = `<p>${data.name}</p>
                                                   <p>Temp:${data.main.temp}</p>
                                                   <p>Clima:${data.weather[0].description}</p>`
        })



}




let usuarios_registrados = []; // <- agregado array vacio para ingresar los usuarios registrados de la linea 32

async function mostrar_posicion(posicion) {

    let lat = posicion.coords.latitude;
    let long = posicion.coords.longitude;
    let key = "a3697faf8e560a628aff2c298d7983f3";

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
            let div_clima = document.getElementById("div_clima");
            div_clima.innerHTML = `<p>Temperatura: ${data.main.temp}°C</p>
                                    <p>Clima: ${data.weather[0].description}</p>`
        })
}

navigator.geolocation.getCurrentPosition(mostrar_posicion);



//Funcion que calcula la cantidad de ingredientes segun cantidad de personas
function total_cantidad(gramos_ingrediente, personas) {

    gramos_ingrediente = parseInt(gramos_ingrediente);
    personas = parseInt(personas);
    let total_cantidad = gramos_ingrediente * personas;
    if (total_cantidad > 0) {
        return total_cantidad
    }
}

function registrar_usuario() {
    // Obtener los valores de los inputs
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    let email = document.getElementById("email").value;
    let nombre = document.getElementById("nombre").value;

    //validamos datos ingresados
    if (usuario != null && usuario != "" && pass != null && pass != "" && email != null && email != "" && nombre != null && nombre != "") {
        // Crear un objeto con los datos del usuario

        let nuevo_usuario = {
            usuario: usuario,
            pass: pass,
            email: email,
            nombre: nombre
        };


        // Agregar el nuevo usuario al arreglo de usuarios registrados
        usuarios_registrados.push(nuevo_usuario);

        // Guardar el arreglo actualizado en el LocalStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios_registrados));


        // Mostrar un mensaje de confirmación
        let nombre_usuario = document.getElementById("usuario").value;
        render = document.getElementById("render")
        render.innerHTML = `
        <hr>
        <button type="button" class="btn btn-success btn_usuario" id="btn_usuario" onclick="renderizar_ingreso()">Ingresar</button>`
        Swal.fire({
            icon: 'success',
            title: 'Excelente',
            text: 'usuario registrado ',
        })
    }
}



function renderizar_registro() {
    let divBody = document.getElementById("divBody");
    divBody.innerHTML = `<div id="divBody">
    <div class="container-fluid text-center fondo_negro">
      <div class="contenedor_general">
        <div>
          <h1>Bienvenido al sistema de recetas de Hoy Cocino Yo</h1>
          <div>
            <div class="logo">
              <img src="./assets/images/LogoNegro.png" alt="logo" width="100" height="100">
            </div>

            <form>
              <label for="">Ingrese su nombre </label><br>
              <input type="text" id="nombre" required /><br>
              <hr>
              <label for="">Ingrese usuario</label><br>
              <input type="text" id="usuario" required /><br>
              <hr>
              <label for="">Ingrese su contraseña</label><br>
              <input type="pass" id="pass" required /><br>
              <hr>
              <label for="">Ingrese su E-mail</label><br>
              <input type="text" id="email" required/><br>
              <hr>
              <button type="button" class="btn btn-success btn_usuario" onclick="registrar_usuario()">Registrarse</button>
              <hr>
            </form>
            
            <div class="render" id="render">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`

}

function renderizar_ingreso() {

    let divBody = document.getElementById("divBody");
    divBody.innerHTML = `<div>
    <div class="container-fluid text-center fondo_negro">
      <div class="contenedor_general">
        <div>
          <h1>Bienvenido al sistema de recetas de Hoy Cocino Yo</h1>
          <div>
            <div class="logo">
              <img src="./assets/images/LogoNegro.png" alt="logo" width="100" height="100">
            </div>
            <form>
              <label for="">Ingrese su usuario</label><br>
              <input type="text" id="usuario" required /><br>
              <hr>
              <label for="">Ingrese su contraseña</label><br>
              <input type="password" id="pass" required /><br>
              <hr>
              <button type="button" class="btn btn-success btn_usuario" id="btn_usuario">Ingresar</button>
            </form>
          </div>
    
        </div>
      </div>
    </div>
    <div class="render" id="render"></div>
    `

    let btn_usuario = document.getElementById("btn_usuario");
    btn_usuario.addEventListener("click", validar_usuario);
};

function validar_usuario() {
    // Obtener los valores de los inputs
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;

    // Obtener la lista de usuarios registrados del LocalStorage
    let usuarios_registrados = JSON.parse(localStorage.getItem("usuarios"));

    // Verificar si el usuario ingresado coincide con alguno de los usuarios registrados
    let usuario_valido = false;
    for (let i = 0; i < usuarios_registrados.length; i++) {
        if (usuario === usuarios_registrados[i].usuario && pass === usuarios_registrados[i].pass) {
            usuario_valido = true;
            break;
        }
    }

    // Si el usuario es válido, redirigir a la página principal. De lo contrario, mostrar mensaje de error.
    if (usuario_valido) {
        entrar();
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario o contraseña incorrectos',
          })
    }
}

//el usuario entra al sitio y pide el nombre para luego mostrarselo en pantalla
function entrar() {
    let nombre_usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("pass").value;
    //validacion de datos
    if (nombre_usuario != null && nombre_usuario != "" && pass != null && pass != "") {
        localStorage.setItem("nombre", nombre_usuario);

        //se almacena el usuario en el localStorage y luego se recupera para mostrarlo en pantalla

        let nombre_usuario_almacenado = localStorage.getItem("nombre");

    


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
                    Chorizo: 50,
                    Panceta: 50,
                    Roastbeef: 150
                },
                Vegetales: {
                    Aceite: 10,
                    Cebolla: 100,
                    Morron: 100,
                    //clave compuesta
                    "Aji molido": 5,
                    Pimenton: 5,
                    Oregano: 5,
                    Lentejas: 150,
                    Papas: 150,
                    "Pure de tomates": 200,
                    Sal: 5,
                },
            }
            ),
            procedimiento = ["Calentar el aceite en una cacerola grande.", "Agregar el chorizo pelado y cortado en rodajas, la panceta cortada en cubitos y la carne cortada en cubos chicos o tiritas.", "Dejar que empiecen a largar jugos y grasa. A los cinco minutos, añadir la cebolla y el morron limpios y cortados en brunoise.", "Codimentar con el aji molido, el pimenton y el oregano.", "Mezclar para que se integren los sabores y se ablanden la cebolla y el morron.", "Incorporar las lentejas, las papas peladas y cortadas en cubos chicos, el pure de tomate y dos tazas grandes de agua caliente.", " Mezclar bien. Cocinar por cinco minutos y verificar la sazon.", "Continuar la coccion a fuego suave hasta que las lentejas esten tiernas y el guiso haya perdido el ochenta po ciento de su parte liquida"]
        )
        lista_recetas.push(guiso);
        let pastel = new receta(
            "pastel",
            (ingredientes = {


                ingredientes: {
                    Papas: 100,
                    Cebolla: 250,
                    Huevo: 1,
                    "Carne picada": 150,
                },
                varios: {
                    Leche: 150,
                    Manteca: 10,
                    "Nuez moscada": 2,
                    Aceite: 20,
                    "Sal gruesa": 5,
                    Pimenton: 10,
                    "Aji molido": 5,
                    Oregano: 10,
                    Comino: 5,
                    Pimienta: 5,

                },
            }
            ),
            procedimiento = ["Hervir las papas peladas y cortadas en trozos en una olla con abundante agua ligeramente salada.", "Cuando esten tiernas, eliminar el agua de coccion. Agregar, de a poco, la leche caliente y aplastarlas con el pisapapas hasta lograr un buen pure.", "Incorporar la manteca, perfumar con la nuez moscada y revolver con un cucharon de madera hasta lograr un pure de textura firme (no dura), lisa y homogenea.", "Reservar", "Calentar el aceite a fuego medio en una cacerola o sarten grande y rehogar la cebolla cortada en brunoise chica.", "Cuando este transparente, agregar la sal gruesa.", "Mezclar y añadir y la carne picada.", "Cocinar hasta que la carne cambie de color (cuando este mas oscura)", "En ese momento, condimentar con el pimenton, el aji molido, el oregano, el comino y la pimienta", "Mezclar bien para que los ingreientes se integren a la carne. Cocinar por cinco minutos mas a fuego muy suave.", "Revolver bien, apagar el fuego y dejar entibiar.", "Luego, colocar el picadillo de carne en el fondo de una fuente de barro y espolvorear con el huevo picado.", "Cubrir con el pure y dorar en horno muy caliente por entre cinco y diez minutos.", "Servir"]
        )
        lista_recetas.push(pastel);

        let ensalada = new receta(
            "ensalada",
            (ingredientes = {


                base: {
                    Rucula: 25,
                    Lechuga: 25,
                    Espinaca: 25,
                },
                opcionales: {
                    Cherry: 50,
                    Palta: 1,
                    Huevo: 1,
                    Pollo: 100,
                },
            }
            ),
            procedimiento = ["Limpiar todos los vegetales", "Cortar las hojas verdes", "Cortar los cherry", "Hervir el pollo con sal", "Cortar la palta en cubos", "cortar el huevo en octavos"]
        );
        lista_recetas.push(ensalada);

        //primer render del html
        let divBody = document.getElementById("divBody");
        divBody.innerHTML = `<div>
                                    <div class="container-fluid text-center fondo_negro">
                                     <div class="contenedor_general">
                                        <div>
                                            <h1>Bienvenido a nuestro sitio, ${nombre_usuario_almacenado}</h1>
                                            <div>
                                                <div class="logo">
                                                    <img src="./assets/images/LogoNegro.png" alt="logo" width="100" height="100">
                                                </div>
                                                <div>
                                                    <h2>Que herramienta desea utilizar?</h2>
                                                    <select name="" id="select">
                                                        <option value=""></option>
                                                        <option value="1">Nuestras Recetas</option>
                                                        <option value="2">Calculador de recetas</option>
                                                    </select>
                                                    <hr>
                                                </div>
                                                <a href="index.html"><button type="button" class="btn btn-warning">Volver</button></a><br>
                                            </div>
                                        </div>
                                    </div>
                                    </div>`
            ;

        //se almacena la opcion elegida por el usuario para luego tomar deciciones
        let opciones_usuario = document.getElementById("select");

        opciones_usuario.addEventListener("change", function (e) {
            if (e.target.value == 1) {
                //segundo render del html preguntando que desea cocinar, aparecen 3 input radio y se almacena mediante el target
                let divBody = document.getElementById("divBody");
                divBody.innerHTML = `<div>
                                            <div class="container-fluid text-center fondo_negro">
                                             <div class="contenedor_general">
                    <div>
                        <h1>Bienvenido a nuestro sitio, ${nombre_usuario_almacenado}</h1>
                        <div>
                            <div class="logo">
                                <img src="./assets/images/LogoNegro.png" alt="logo" width="100" height="100">
                            </div>
                            <div>
                                <h2>Que desea cocinar?</h2>
                                <label>Elija una opción:</label><br>
                                <input type="radio" name="opcion_unica" value="guiso">Guiso de lentejas<br>
                                <input type="radio" name="opcion_unica" value="pastel">Pastel de papa<br>
                                <input type="radio" name="opcion_unica" value="ensalada">Ensalada<br><br>
                                <label for="">¿Para cuántas personas desea cocinar?</label>
                                <input type="text" name="" id="cantidad">
                                <button type="button" class="btn btn-danger" id="btn_receta">Tengo Hambre</button>
                                <a href="index.html"><button type="button" class="btn btn-warning">Volver al Inicio</button></a><br>
                            </div>
                            <hr>
                            </div>
                            <div class="resultado" id="resultado">
                            
                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                 `
                    ;
                // se captura el boton receta y la opcion elegida
                let btn_receta = document.getElementById('btn_receta');
                btn_receta.addEventListener('click', function () {
                    let opciones = document.getElementsByName("opcion_unica")
                    let div = document.getElementById('resultado');

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
                        console.log(resultado_anterior);
                        if (resultado_anterior) {
                            // resultado_anterior.remove();
                        }
                        let procedimiento_anterior = document.querySelector('.procedimiento');
                        console.log(procedimiento_anterior)
                        if (procedimiento_anterior) {
                            procedimiento_anterior.style.display = "none";
                        }
                        // si se cumplen las condiciones anteriores creamos una tabla con ingredientes y cantidad ingredientes

                        if (cantidad_personas) {
                            let receta_mostrar = document.createElement('div');
                            receta_mostrar.classList.add('render');
                            let tabla = document.createElement('table');
                            tabla.classList.add('resultado');
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
                            tabla.innerHTML += procedimiento;

                            // lo agregamos al html   
                            receta_mostrar.appendChild(tabla);

                            div.innerHTML = ""

                            div.appendChild(receta_mostrar);
                            console.log("Estamos llegando a la linea 376")

                        }
                        // si no se cumple alguna condicion anterior, enviamos un alert, me parecio la mejor manera de avisarle al usuario
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Faltan completar datos o hay datos erroneos',
                        })

                    }
                });
            }
            if (e.target.value == 2) {
                // Aqui arranca el calculador de recetas
                //tercer render del html
                let divBody = document.getElementById("divBody");
                divBody.innerHTML = `<div>
                                            <div class="container-fluid text-center fondo_negro">
                                             <div class="contenedor_general">
                  <div>
                    <h1>Bienvenido al calculador de recetas de Hoy Cocino Yo</h1>
                    <div>
                      <div class="logo">
                        <img src="./assets/images/LogoNegro.png" alt="logo" width="100" height="100">
                      </div>
                      <div>
                        <label>Complete todos los campos</label><br><hr>
                        <label for="">Ingrese nombre receta</label>
                        <input type="text" id="nombre_receta"><br><hr>
                        <label for="">Ingrese cantidad personas</label>
                        <input type="number" id="personas"><br><hr>
                        <label for="">Ingrese cantidad ingredientes</label>
                        <input type="number" id="cantidad_ingredientes"><br><hr>
                        <button type="button" class="btn btn-success" id="btn_ingredientes">Calcular</button>
                      </div>
                      <div class="calculador"></div>
                      <div class="resultado" id="resultado"></div>
                    </div>
            
                  </div>
                </div>
              </div>
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
                            inputsHtml += ` <label for="">Ingrese NOMBRE ingrediente:</label><br>
                                            <input type="text" id="ingrediente${vuelta + 1}_nombre"><br>
                                            <label for="">Ingrese CANTIDAD en GRAMOS para una porción:</label><br>
                                            <input type="number" id="ingrediente${vuelta + 1}_cantidad"><br>`;
                        }
                        inputsHtml += `<button id="btn_calcular" class="btn btn-success"> Total</button><br><br><br>`
                        // Agregamos los inputs generados al HTML
                        document.querySelector('.calculador').innerHTML += inputsHtml;

                        // Escuchamos el evento click del botón calcular
                        let btn_calcular = document.getElementById('btn_calcular');
                        btn_calcular.addEventListener('click', () => {
                            let div = document.getElementById('resultado');
                            let resultado = document.createElement('div');
                            document.body.appendChild(resultado);
                            // Obtenemos los valores de los ingredientes ingresados

                            for (let vuelta = 0; vuelta < cantidad_ingredientes; vuelta++) {
                                let nombre_ingrediente = document.getElementById(`ingrediente${vuelta + 1}_nombre`).value;
                                let gramos_ingrediente = document.getElementById(`ingrediente${vuelta + 1}_cantidad`).value;
                                let total_gramos = total_cantidad(gramos_ingrediente, personas);
                                // Creamos un elemento para mostrar el resultado del ingrediente actual
                                let resultado_ingrediente = document.createElement('p');
                                resultado_ingrediente.textContent = `Ud necesita ${total_gramos} gramos de ${nombre_ingrediente}`;
                                div.appendChild(resultado_ingrediente);
                            }


                        });

                    }
                    //un alert para avisarle que no completo todos los datos
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Faltan completar datos o hay datos erroneos',
                        })
                    }

                });



                //aca termina el codigo de la funcion (nota mental)
            }

        });

        ;
    } else {
        console.log("Complete correctamente todos los campos")
        Swal.fire({
            icon: 'error',
            title: 'PRESTE ATENCION',
            text: 'Faltan completar datos o hay datos erroneos',
        })


    }

}

document.getElementById("btn_registrar").addEventListener("click", renderizar_registro);
document.getElementById("btn_ingresar").addEventListener("click", renderizar_ingreso);






