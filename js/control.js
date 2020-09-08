//Carga evento click a los botones.
agregarEventoClick("btnFToC", fahrenheitCelsios);
agregarEventoClick("btnFToK", fahrenheitKelvin);
agregarEventoClick("btnCToF", celsiosFahrenheit);
agregarEventoClick("btnCToK", celsiosKelvin);
agregarEventoClick("btnKToF", kelvinFahrenheit);
agregarEventoClick("btnKToC", kelvinCelsios);

function fahrenheitCelsios() {
    let f = document.getElementById("cantidad").value;
    let c = Math.round((f - 32) * 5 / 9);

    alert(c + " °C");
}

function fahrenheitKelvin() {
    let f = document.getElementById("cantidad").value;
    let k = Math.round((f -32) * 5  / 9 + 273);

    alert(k + (" °K"));
}

function celsiosFahrenheit() {
    let c = document.getElementById("cantidad").value;
    let f = Math.round(c * 9 / 5 + 32);

    alert(f + " °F");
}

function celsiosKelvin() {
    let c = parseInt(document.getElementById("cantidad").value);
    let k = c + 273;

    alert(k + (" °K"));
}

function kelvinFahrenheit() {
    let k = document.getElementById("cantidad").value;
    let f = Math.round((k - 273) * 9 / 5 + 32);

    alert(f + " °F");
}

function kelvinCelsios() {
    let k = document.getElementById("cantidad").value;
    let c = Math.round(k - 273);

    alert(c + " °C");
}

/**
 * Agrega manejador de eventos click a un elemento del DOM
 * @param {string} id //ID del elemento al que se le asignara el manejador
 * @param {function} func //El nombre de la funcion manejadora del evento
 */
function agregarEventoClick(id, func) {
    let x = document.getElementById(id);
    if (x !== null) {  //Si existe el elemento
        x.removeEventListener('click', func, false);
        x.addEventListener('click', func, false);
    }
}