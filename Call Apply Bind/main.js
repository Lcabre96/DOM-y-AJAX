this.lugar = "Contexto global";

function saludar(saludo, aQuien) {
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "a");

const obj = {
    lugar: "Contexto objeto"
}

saludar.call(obj, "Hola", "b");
saludar.call(null, "Hola", "b"); //aplicando el null hace referencia al contexto global de la funcion
saludar.apply(obj, ["Chau", "c"]);
saludar.apply(null, ["Hola", "c"]); //aplicando el null hace referencia al contexto global de la funcion
// usando this tambien va a la funcion global



this.nombre = "window";

const persona = {
    nombre: "Jon",
    saludar: function(){
        console.log(`Hola ${this.nombre}`)
    }
}

const otraPersona = {
    saludar: persona.saludar.bind(this)
}

otraPersona.saludar();