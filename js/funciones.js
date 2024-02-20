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
    
    // Limpiar el select
    while(users.firstChild){
        users.removeChild(users.firstChild);
    }

    for (let index = 0; index < Persona.personas.length; index++) {
        const opts = document.createElement('option');
        users.appendChild(opts).text = Persona.personas[index];
    }
}


// Inserta los lenguajes
export function addLeng(){
    const leng = document.getElementById('leng-select');
    let valores = ['Español', 'Ingles','Portugues'];

    for (let i = 0; i < valores.length; i++){
        const opts = document.createElement('option');
        leng.appendChild(opts).text = valores[i];
    }
}

// Inserta las nacionalidades
export function addNac(){
    const nac = document.getElementById('nac-select');
    let valores = ['Dominicana', 'Portoriqueña', 'Bracileña', 'Colombiana', 'Estadounidense'];

    for(let i = 0; i < valores.length; i++){
        const opts = document.createElement('option');
        nac.appendChild(opts).text = valores[i];
    }
}


