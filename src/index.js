class vehiculo{
  constructor(marca, modelo, anoe){ // le damos los parametros necesarios para construir
    this.marca=marca; // seteo de datos
    this.modelo=modelo;
    this.anoe=anoe;
  }

  mostrarVehiculo(){ // es una funcion, pero no necesita ser declarada como tal 
    
    return `Este vehiculo es ${this.marca} ${this.modelo} ${this.anoe}`;
    
  } 
}

const miVehiculo=new vehiculo(`Toyota`, `Corolla`, 2024); /// cada vez que quiero agreghar un nuevo auto creando una nueva variable}
/// nueva instancia 
const miVehiculo2=new vehiculo(`Hundai`, `Elantra`, 2005); /// cada vez que quiero agreghar un nuevo auto creando una nueva variable}

console.log(miVehiculo2.mostrarVehiculo()); //escribir en el terminal node src/index.js para poder ver en terminal
