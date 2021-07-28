const container = document.querySelector(".contenedor");
const div_emergente_otro = document.querySelector(".alerta_de_error");
const parrafoerror = document.getElementById("Contenido_Error");

var cantidad_de_elementos_ingresados = 0;
var nuevoArray = new Array();

function crear_array (numero){
    cantidad_de_elementos_ingresados = 0;

    //crear el array
    for (let i = 0; i < numero.value; i++) {
        nuevoArray[i] = new Array();
        let div = `<div class="padre_elemento_array${i}">     
                    <div class="elemento_array${i}">
                        <h3>
                            ${i+1}
                        </h3>
                    </div>
                   </div>`
        container.innerHTML += div;
    }
}

function crear_nodo(numero, nombre, cantidad_ingresada){
    //alert(cantidad_de_elementos_ingresados + " " + cantidad_ingresada);
    if (cantidad_de_elementos_ingresados < cantidad_ingresada){

        var padre_contenedor = document.querySelector(`.padre_elemento_array${numero}`);

        if (nuevoArray[numero].includes(nombre)){
            div_emergente_otro.style.display = "block";
            div_emergente_otro.style.display = "flex";
            parrafoerror.innerHTML = `El usuario ${nombre}, ya existe`
        }else{
            cantidad_de_elementos_ingresados ++;
            nuevoArray[numero].push(nombre); 

            let div = `<div class="flecha" id="flechaelem${nuevoArray[numero].indexOf(nombre)}"></div> 
                        <div class="elemento_array" id="elem${nuevoArray[numero].indexOf(nombre)}">
                            <h3>
                                ${nombre}
                            </h3>
                        </div>`
            padre_contenedor.innerHTML += div;

        }
    }else{
        div_emergente_otro.style.display = "block";
        div_emergente_otro.style.display = "flex";
        parrafoerror.innerHTML = `te pasaste el maximo de elementos que puedes ingresar`
    }
}

function eliminar_elemento_de_array(posicion, indice){
    nuevoArray[posicion].splice(indice,1);
}