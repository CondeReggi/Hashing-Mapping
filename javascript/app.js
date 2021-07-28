const numero_de_elementos = document.getElementById("numero_de_elementos"); //variable para el hash
const boton = document.getElementById("boton_aceptar");
const agregar_cosas = document.querySelector(".agregar_cosas");
const svg_atras = document.getElementById("svg_atras");
const primer_panel = document.querySelector(".menu");
const segundo_panel = document.querySelector(".contenedor");
const boton_ingresar = document.getElementById("boton_ingresar");
const boton_emergente = document.getElementById("boton_emergente");
const div_emergente = document.querySelector(".alerta_de_error");
const boton_buscar = document.getElementById("boton_buscar");
const ubicacion = document.getElementById("ubicacion");
const boton_borrar = document.getElementById("boton_borrar");

function hash(elemento){
    resultado = 0;
    let cadena = elemento.value.toString();
    let cantidad_de_letras = cadena.length;
    
    for (let i = 0; i < cantidad_de_letras; i++) {
        resultado += cadena.charCodeAt(i);
    }
    return (resultado % numero_de_elementos.value);
}

boton_ingresar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre_ingresar");

    if (nombre.value === ""){
        div_emergente_otro.style.display = "block";
        div_emergente_otro.style.display = "flex";
        parrafoerror.innerHTML = `Tenes que esceribir algo`
    }else{
        resultado = hash(nombre); //obtengo el valor del hash
        crear_nodo(resultado, nombre.value, numero_de_elementos.value);
    }
    nombre.value = "";
})

boton_borrar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre_ingresar");

    if (nombre.value === ""){
        div_emergente_otro.style.display = "block";
        div_emergente_otro.style.display = "flex";
        parrafoerror.innerHTML = `Tenes que esceribir algo`
    }else{

        resultado = hash(nombre); //obtengo el valor del hash
        let indice = nuevoArray[resultado].indexOf(nombre.value);
        var selector = document.querySelector(`#elem${indice}`);    
        var flecha_selector = document.querySelector(`#flechaelem${indice}`);    

        let padre = selector.parentNode;
		padre.removeChild(selector);

        let padre_flecha = flecha_selector.parentNode;
		padre_flecha.removeChild(flecha_selector);

        //borrarlo del array
        eliminar_elemento_de_array(resultado, indice);
    }
    nombre.value = "";
})


boton_buscar.addEventListener("click", () => {
    let nombre = document.getElementById("nombre_ingresar");

    if (nombre.value === ""){
        div_emergente_otro.style.display = "block";
        div_emergente_otro.style.display = "flex";
        parrafoerror.innerHTML = `Tenes que esceribir algo`
    }else{
        result = hash(nombre); //obtengo la posicion del array (pos + 1 mostrar)
        if (nuevoArray[result].indexOf(nombre.value.toString()) >= 0){
            let indice = nuevoArray[result].indexOf(nombre.value);
            ubicacion.style.display = "block";
            ubicacion.innerHTML = "Array posicion: " + (result + 1) + ", Lugar: " + indice;
            
        }else{
            div_emergente_otro.style.display = "block";
            div_emergente_otro.style.display = "flex";
            parrafoerror.innerHTML = `El nombre que busca, no se encuentra`
        }
    }
    nombre.value = "";
})

svg_atras.addEventListener("click", () => { 
    segundo_panel.style.display = "none";
    svg_atras.style.display = "none";
    primer_panel.style.display = "block";
    while(segundo_panel.firstChild){ 
        segundo_panel.removeChild(segundo_panel.firstChild); 
    }
    primer_panel.style.display = "flex";
    agregar_cosas.style.display = "none";
    numero_de_elementos.value = "";
    ubicacion.style.display = "none";
})

boton.addEventListener("click", () => {
    //tengo que validar que sean numeros las cosas ingresadas

    let label_error = document.getElementById("ingreso_incorrecto");

    if (numero_de_elementos.value > 10 || numero_de_elementos.value === "" || numero_de_elementos.value < 1){
        label_error.style.display = "block";

        if(numero_de_elementos.value > 10 || numero_de_elementos.value < 0){
            label_error.innerHTML = "x e [1,10]"
        }else{
            label_error.innerHTML = "Debe ingresar algo"
        }
    }else{
        //el numero es valido

        label_error.style.display = "none";
        primer_panel.style.display = "none";
        segundo_panel.style.display = "block";
        svg_atras.style.display = "block";
        agregar_cosas.style.display = "block";

        segundo_panel.style.display = "flex";
        agregar_cosas.style.display = "flex";
        //llamar funcion crear
        crear_array(numero_de_elementos)
    }
})

boton_emergente.addEventListener("click", () => {
    div_emergente.style.display = "none";
})

