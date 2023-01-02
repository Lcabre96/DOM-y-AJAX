const d = document,
  n = navigator;


export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enabledHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const succes = (position) => {
    let coords = position.coords;
    //console.log(position);

    $id.innerHTML = `
      <p>Tu posición actual es:</p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>   
        <li>Precisión: <b>${coords.accuracy}</b> metros</li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},
      40z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>${err.code}: ${err.message}</mark></p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(succes, error, options);
}