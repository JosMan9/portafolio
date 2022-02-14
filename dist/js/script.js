window.addEventListener("load", function() {
    this.document.getElementById("loader").classList.toggle("loader2");
});

/**
 *  Evento del form para mandar a un servicio de correo electrónico
 */
const $form = document.getElementById('form');
const $link = document.getElementById('tomail');

$form.addEventListener('submit', (event) => {
    event.preventDefault()
    const form = new FormData($form);


    let nombre = form.get('name');
    let mensaje = form.get('message');
    let cadenaURL = 'mailto:josem.rl32@gmail.com?subject= ' + nombre + '- Oferta' + '&body=' + mensaje;

    $link.setAttribute('href', cadenaURL);
    $link.click();

});

/**
 *  Referencias a mis diferentes redes sociales
 */

const $iFace = document.getElementById('face-img');
const $aFace = document.getElementById('face');

$iFace.addEventListener('click', () => {
    $aFace.click();
});


const $iWhats = document.getElementById('whats-img');
const $aWhats = document.getElementById('whats');

$iWhats.addEventListener('click', () => {
    $aWhats.click();
});


const $iGit = document.getElementById('git-img');
const $aGit = document.getElementById('git');

$iGit.addEventListener('click', () => {
    $aGit.click();
});


const $iLinkedin = document.getElementById('linkedin-img');
const $aLinkedin = document.getElementById('linkedin');

$iLinkedin.addEventListener('click', () => {
    $aLinkedin.click();
});



/**
 *  Inicia lal ibreria AOS
 */

AOS.init( {
    duration: 1500
});

/**
 *  Referencia a mi GitHub
 */

const $iPorta = document.getElementById('porta-id');
const $aPorta = document.getElementById('porta-a');

$iPorta.addEventListener('click', () => {
    $aPorta.click();
});


/**
 *  Referencias de la sección portafolio a mis trabajos realziados
 */

const $imgGradient = document.getElementById('img-gradient');
const $aGradient = document.getElementById('a-gradient');

$imgGradient.addEventListener('click', () => {
    $aGradient.click();
});


const $imgGDicc = document.getElementById('img-dictionary');
const $aDicc = document.getElementById('a-dictionary');

$imgGDicc.addEventListener('click', () => {
    $aDicc.click();
});


const $imgHidro = document.getElementById('img-hidro');
const $aHidro = document.getElementById('a-hidro');

$imgHidro.addEventListener('click', () => {
    $aHidro.click();
});

