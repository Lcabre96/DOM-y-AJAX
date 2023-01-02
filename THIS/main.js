console.log(this);
console.log(window);

console.log(this === window);

this.nombre = "Contexto global";
console.log(this.nombre);

function imprimir() {
    console.log(this.nombre);
}
imprimir();


const obj = {
    nombre: "Contexto objeto",
    imprimir: function(){
        console.log(this.nombre);
    }
}
obj.imprimir();



const obj2 = {
    nombre: "Contexto objeto 2",
    imprimir // hace referencia a la función
}
obj2.imprimir();


const obj3 = {
    nombre: "Contexto objeto 3",
    imprimir: () =>{
        console.log(this.nombre);
    }
}
obj3.imprimir();


