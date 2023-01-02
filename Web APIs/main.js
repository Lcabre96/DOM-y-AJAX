/* let texto = "Hola, me llamo Luis Cabrera";

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar(texto);
    
 */

/* console.log(document.getElementsByTagName("li")); //NO se utilizan ya casi.
console.log(document.getElementsByClassName("card")); //NO se utilizan ya casi.
console.log(document.getElementsByName("nombre")); //NO se utilizan ya casi.
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));

console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);

$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.textAlign = "center";
$linkDOM.style.width = "50%";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.borderRadius = ".5rem";
$linkDOM.style.padding = "1rem";

//Variables CSS - Custom Properties CSS

const $html = document.documentElement,
  $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

//$body.style.backgroundColor = varDarkColor;
//$body.style.color = varYellowColor;

//$html.style.setProperty("--dark-color", "#000") // setProperty SIRVE PARA MODIFICAR LA PROPIEDAD DE LA VARIABLE
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

//$body.style.setProperty("background-color", varDarkColor);

const $card = document.querySelector(".card");

// toggle FUNCIONA COMO UN INTERRUPTOR, ASIGNANDOLO SACA LA PROPIEDAD Y VOLVIENDO A
// ASIGNAR, VUELVE A PONER LA PROPIEDAD (ej CAMBIAR TEMA OSCURO A CLARO).

console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
//CAMBIAR VARIAS CLASES AL MISMO TIEMPO.
$card.classList.add("opacity-80", "sepia");
//$card.classList.remove("opacity-80")
//$card.classList.remove("sepia")

const $whatIsDom = document.getElementById("que-es");

let text = `
    <p>
    El modelo de Objetos del Documento (<b><i>DOM - Document Object Model</i></b>) es un API para
    documentos HTML Y XML
    </p>
    <p>
    Este proveé una representación estructural del documento, permitiendo modificar su contenido y
    presentación visual mediante código JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`;

$whatIsDom.innerHTML = text;

console.log($whatIsDom);

const $figure = document.createElement("figure");
const $img = document.createElement("img");
const $figCaption = document.createElement("figcaption");
const $figCaptionText = document.createTextNode("Animals");
const $figure2 = document.createElement("figure");

//CREO EL ELEMENTO PADRE DONDE VOY A INSERTAR LA NUEVA TARJETA

const $cards = document.querySelector(".cards");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figCaption.appendChild($figCaptionText);
$figure.appendChild($img);
$figure.appendChild($figCaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/people" alt="People">
    <figcaption>People</figcaption>    
`;

$cards.appendChild($figure2);

document.write("<h2>Estaciones</h2>");

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"];

const $ul = document.createElement("ul");

document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

document.write("<h2>Continentes del Mundo</h2>");

const continentes = ["África", "Ámerica", "Asia", "Europa", "Oceanía"];

const $ul2 = document.createElement("ul");

document.body.appendChild($ul2);

$ul2.innerHTML = "";

continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const $ul3 = document.createElement("ul");
const $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h2>Meses del Año</h2>");

$ul3.appendChild($fragment);
document.body.appendChild($ul3);
 */

/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];

  cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $cards.appendChild($fragment);
 */

/* const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);


$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");
 */
//$cards.replaceChild($newCard, $cards.children[2]);// APLICA Y REEMPLAZA UN ELEMENTO DONDE LE DIGAMOS

//$cards.removeChild($cards.lastElementChild);// REMUEVE EL ULTIMO ELEMENTO

//$cards.insertBefore($newCard, $cards.firstElementChild);//LO APLICA AL PRINCIPIO.

//document.body.appendChild($cloneCards)

/*
.InsertAdjacent...
  .insertAdjacentElement(position, el)
  .insertAdjacentHTML(position, html)
  .insertAdjacentText(position, text)

Posiciones 
  beforebegin(hermano anterior)
  afterbegin(primer hijo)
  beforeend(ultimo hijo)
  afterend(hermano siguiente)
 */

const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure"),
  $cloneCards = $cards.cloneNode(true);

/* $newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption>Any</figcaption>
`;
 */

let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption></figcaption>
`;

$newCard.classList.add("card");


$newCard.insertAdjacentHTML("beforeend", $contentCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")
//$cards.insertAdjacentElement("afterbegin", $newCard)


$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.before($newCard);


/* MANEJADORES DE EVENTOS */



function holaMundo() {
  alert("Hola mundo");
  console.log(event);
}

function saludar(nombre = "Desconocid@") {
  alert(`Hola ${nombre}`)
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remover");




$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e) {
  alert("Hola mundo con evento semántico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo)
$eventoMultiple.addEventListener("click", (e) => {
  alert("Hola mundo con manejador de eventos múltiple")
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Luis");
});


const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick)
  $eventoRemover.disabled = true; // DESHABILITA EL BOTÓN.

}


$eventoRemover.addEventListener("dblclick", removerDobleClick);



/* ************************* FLUJO DE EVENTOS ************************* */


const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
  $linkEventos = document.querySelector(".eventos-flujo a");

/* console.log($divsEventos);

function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  e.stopPropagation();
}

$divsEventos.forEach(div => {
  //FASE DE BURBUJA
  div.addEventListener("click", flujoEventos);
  div.addEventListener("click", flujoEventos, false);
  //FASE DE CAPTURA
  div.addEventListener("click", flujoEventos, true);
  div.addEventListener("click", flujoEventos, {
    capture: false,
    once: true, // CON EL ONCE EL EVENTO SOLO SE VA A EJECUTAR UNA VEZ.
  }); 
}); */


/* $linkEventos.addEventListener("click", e => {
  alert("Hola")
  e.preventDefault();
  e.stopPropagation();
}) */


function flujoEventos(e) {
  console.log(`Hola te saluda ${this.e}, el click lo originó ${e.target.className}`);
  e.stopPropagation();
}


document.addEventListener("click", (e) => {
  console.log("Click en", e.target);

  if(e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if(e.target.matches(".eventos-flujo a")) {
    alert("Hola bienvenido");
    e.preventDefault();
  }
});

/* *************************************************************************** */


/* Manejo del BOM */

const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;
  
$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://google.com");
});
$btnCerrar.addEventListener("click", (e) => {
  ventana.close(); 
});
$btnImprimir.addEventListener("click", (e) => {  
  window.print();
});     


/* *************************************************************************** */

console.log("*********** Objeto URL (location) ***********")
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.pathname);

console.log("*********** Objeto Historial (history) ***********")
console.log(history);
console.log(history.length);


console.log("*********** Objeto Navegador (navigator) ***********")
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);















