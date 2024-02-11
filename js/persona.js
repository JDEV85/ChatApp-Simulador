import * as fx from "./funciones.js";

class Persona{
    static conter = 0;
    static personas = [];
    static personaObj = [];

    constructor(nombre, apellido, fechaNacimiento, altura, peso, lenguaje, nacionalidad, pic){
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.altura = altura;
        this.peso = peso;
        this.lenguaje = lenguaje;
        this.nacionalidad = nacionalidad;
        this.pic = pic;
        this.txt = "";
        // this.chatPlantilla = [
            //     "chatp1", "chatp2"
            // ];
        Persona.conter ++; // Enumera las instancias creadas
        this.chatPlantilla = "chatp" + Persona.conter;
        Persona.personas.push(this.nombre); // Agrega los nombres de las personas creadas
        Persona.personaObj.push(this); // Guarda las instancias de personas creadas
    }

    saludar(){
        let text = "Hola, mi nombre es " +  this.nombre + " " + this.apellido;
        return text;
    }

    decirEdad(){
        const fecha = new Date();
        const nac = new Date(this.fechaNacimiento);
        let edad = Math.floor((fecha - nac) / 31536000000);
        let text = "tengo " + edad +  " años";
        return text;
    }

    enviarMsg(text){
        this.txt = text;
        const msgDate = new Date();
        let fecha = msgDate.toLocaleDateString();
        let hora = msgDate.getHours().toString().padStart(2, "0")
        let mnt = msgDate.getMinutes().toString().padStart(2, "0");
        let dateTime = `<span class="msg-date">${hora}:${mnt}</span>`;
        const chatbox = document.getElementById("chat-window");
        const  pContainer = document.createElement("div");
        pContainer.classList.add("img-name");
        chatbox.append(pContainer);
        const img1 = document.createElement("img");
        img1.src = this.pic;
        img1.width = "50";
        img1.height = "50";
        img1.classList.add("uImg");
        const p1 = document.createElement("p");
        p1.classList.add("chatmsg");
        p1.classList.add(this.chatPlantilla); // Elige la plantilla para el color de mensaje
        p1.innerHTML = `${this.txt}  ${dateTime}`;
        const p1Span = document.createElement("p");
        p1Span.classList.add("pName");
        p1Span.innerHTML = this.nombre;
        chatbox.append(p1);
        pContainer.append(img1, p1Span);
        
    
    }
    
    // Agrega un mensaje sin foto y sin nombre
    addMsg(text){
       
        this.txt = text;   
        const msgDate = new Date();
        let fecha = msgDate.toLocaleDateString();
        let hora = msgDate.getHours().toString().padStart(2, "0")
        let mnt = msgDate.getMinutes().toString().padStart(2, "0");
        let dateTime = `<span class="msg-date">${hora}:${mnt}</span>`;
        const chatbox = document.getElementById("chat-window");
        const p1 = document.createElement("p");
        p1.classList.add("chatmsg");
        p1.classList.add(this.chatPlantilla);    
        p1.innerHTML = `${this.txt}  ${dateTime}`;
        chatbox.append(p1);
        
    }

    

  // Decide que si se envia un menssaje de apertura o se agrega
    nuevoMensaje(texto){
          
        const p = document.getElementsByClassName('chatmsg');
        //console.log(p.length); 
        //console.log(fx.personaUltimoMsj("pName"));
        if (this.nombre == fx.personaUltimoMsj("pName") && p.length >= 1)  {
            this.addMsg(texto);
            
        } 
        else{
            
            
            this.enviarMsg(texto);

        }
    }

}



export default Persona ;
