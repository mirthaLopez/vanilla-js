// Inserte el código aquí
let arreglo=[1,2,3,4];
clonarArreglo(arreglo);

function clonarArreglo (arreglo) {
    const nuevoArreglo=[...arreglo];
    return nuevoArreglo;
}

const perro={
    name:"choco",
    age:3,
    breed:"american",
}
function clonarObjeto(perro) {
    const perroClon={...perro}
    return perroClon;
}


const result=sumar(1,2,3,4,5);

function sumar(...numeros) {
    return numeros.reduce((acumulador, valorActual)=>{
        return acumulador+valorActual
    },0)
}


function saludar(nombre="Desconocido") {
    let saludo="Hola";
    return saludo, nombre;
}


// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };