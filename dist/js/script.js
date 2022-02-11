window.addEventListener("load", function() {
    this.document.getElementById("loader").classList.toggle("loader2");
});

const $form = document.getElementById('form');
const $link = document.getElementById('tomail');

$form.addEventListener('submit', (event) => {
    //console.log(event.target.value);
    event.preventDefault()
    const form = new FormData($form);
   // console.log(form.get('name'));
    //console.log(form.get('message'));

    let nombre = form.get('name');
    let mensaje = form.get('message');
    let cadenaURL = 'mailto:josem.rl32@gmail.com?subject= ' + nombre + '- Oferta' + '&body=' + mensaje;

    $link.setAttribute('href', cadenaURL);
    $link.click();

});

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
