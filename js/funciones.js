// Enviar eñ valor del textarea del formulario
import Persona from "./persona.js";


// Identifica la persona que envia el utlimo mensaje
export function personaUltimoMsj(nombreClase){
    const select = document.getElementById('user-select'); 
    const p = document.getElementsByClassName(nombreClase);
    let index = p.length -1;
    let result = (index < 0) ? 'N' :  p[index].textContent;
    
    return result;

}

// Inserta las personas al listado
export function addPersonName(){
    const users = document.getElementById('user-select');

    var valores = [];

    for (let index = 0; index < Persona.personas.length; index++) {
        const opts = document.createElement('option');
        users.appendChild(opts).text = Persona.personas[index];
    }
}







