
let aleatorio = Math.round(Math.random() * 100 + 5)


const objUsuarios = {
    propiedad : "Valor",
    [`Id_${aleatorio}`] : "Valor aleatorio"
};


const usuarios = ["Jon", "Miguel", "Morita"];


usuarios.forEach((usuario, index) => objUsuarios[`Id__${index}`] = usuario);

console.log(objUsuarios);