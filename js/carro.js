
// Crear  una clase Carro

class Carro {
    constructor(brand, model, year, color) {

        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.displayCarStatus = 'apagado';
        this.velocidad = 10; 
        
    }

    encender(){
        
        
       this.displayCarStatus = (this.displayCarStatus == "Apagado"  ) ? "conectado" : "encendido" ;
                 
    }

    apagar(){

        
        this.displayCarStatus =  (this.displayCarStatus == "encendido"  ) ? "apagado" : "desconectado" ;
         
    }

    acelerar(incr){
        this.velocidad += incr;
    }

    reducir(desc){
      this.velocidad =  (this.velocidad > 0) ?  this.velocidad -= desc : 0;
    }

    
}




export default Carro;
