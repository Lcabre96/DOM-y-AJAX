import hamburgerMenu from "./Dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./Dom/reloj.js";
import { moveBall, shortcuts } from "./Dom/teclado.js";
import countdown from "./Dom/cuenta_regresiva.js";
import scrollTopButton from "./Dom/boton_scroll.js";
import darkTheme from "./Dom/tema_oscuro.js";
import responsiveMedia from "./Dom/objeto_responsive.js";
import responsiveTester from "./Dom/prueba_responsive.js";
import userDeviceInfo from "./Dom/deteccion_dispositivos.js";
import networkStatus from "./Dom/deteccion_red.js";
import webCam from "./Dom/deteccion_webcam.js";
import getGeolocation from "./Dom/geolocalizacion.js";
import searchFilters from "./Dom/filtro_busquedas.js";
import draw from "./Dom/sorteo.js";
import slider from "./Dom/carrusel.js";
import scrollSpy from "./Dom/scroll_espia.js";
import smartVideo from "./Dom/video_inteligente.js";
import contactFormValidations from "./Dom/validaciones_formulario.js";
import speechReader from "./Dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Dec 15, 2022 04:00:15", "Feliz Cumpleaños");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=6Vn8BgjdhuI" target="_blank"
    rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" 
    src="https://www.youtube.com/embed/6Vn8BgjdhuI" 
    title="YouTube video player" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
    gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/fYQiMWHTk2gKfx1VA" target="_blank"
    rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49566619.83617204!2d-109.90387539999998!3d40.68924940000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25090129c363d%3A0x40c6a5770d25022b!2sEstatua%20de%20la%20Libertad!5e0!3m2!1ses-419!2sar!4v1663858398723!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");

});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
