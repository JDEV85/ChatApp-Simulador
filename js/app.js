import Carro from "./carro.js";
import LLanta from "./llanta.js";
// import {PersonaMsg} from "./persona.js";
import Persona  from "./persona.js";
import * as fx from './funciones.js';




const chatbox = document.getElementById("chat-window");

const persona1 = new Persona
(
    "Valery",
    "Perez",
    "2006-11-27",
    "1.4 m",
    "80 kg",
    "Español",
    "Dominicana",
    "../assets/valery.jpeg"
    )
    

const persona2 = new Persona
(
    "Manuel",
    "Ortega",
    "2010-08-06",
    "1.7 m",
    "91 kg",
    "Español",
    "Dominicana",
    "../assets/Manuel.jpeg"
    )

    const persona3 = new Persona
    (
        "Carmen",
        "Ortiz",
        "2009-07-15",
        "1.3 m",
        "80 kg",
        "Español",
        "Dominicana",
        "../assets/Carmen.jpeg"
        )


// Inserta las personas en la lista de quien escribe el mensaje
fx.addPersonName();

// Leer los datos del formulario y envia el mensaje
const formulario = document.getElementById("msgForm");
formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const msj = document.getElementById('texto');
    const select = document.getElementById('user-select');
    const op = document.getElementsByTagName('option');
    
    // Identifica quien esta enviando el mensaje
    for (let i = 0; i < op.length; i++) {
        if (select.value == Persona.personas[i] && msj.value != '') {
            Persona.personaObj[i].nuevoMensaje(msj.value);
            msj.value = null;
            break;

        }
    
    }   
            


});













