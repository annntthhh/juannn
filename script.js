document.getElementById('btnSaltarCampo').addEventListener('click', function() {
    document.getElementById('tunel').style.transform = 'translateY(-100%)';
});

let minutos = 90;
let segundos = 0;
const reloj = document.getElementById('reloj-partido');

setInterval(() => {
    segundos++;
    if (segundos === 60) { minutos++; segundos = 0; }
    reloj.innerText = `${minutos}:${segundos < 10 ? '0' + segundos : segundos}+`;
}, 1000);

function lanzarConfeti() {
    for (let i = 0; i < 50; i++) {
        const confeti = document.createElement('div');
        confeti.className = 'confeti';
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.backgroundColor = Math.random() > 0.5 ? '#1a1740' : '#c19d53';
        confeti.style.top = '-10px';
        document.body.appendChild(confeti);
        setTimeout(() => confeti.remove(), 3000);
    }
}

const boton = document.getElementById('btnInteractivo');
const resultado = document.getElementById('resultado');
const fondoRayado = document.getElementById('bg');
const notificacion = document.getElementById('notificacion');

boton.addEventListener('click', function() {
    document.body.style.animation = "flashCams 0.2s 3";
    lanzarConfeti();
    
    resultado.classList.remove('hidden');
    boton.style.display = 'none';
    
    setTimeout(() => {
        document.body.style.backgroundColor = "#c19d53"; 
        fondoRayado.style.opacity = "0.1"; 
        notificacion.classList.remove('hidden-notif');
    }, 600);

    setTimeout(() => { alert("Tamo miamor"); }, 1000);
});

const btnVar = document.getElementById('btnVar');
const varMensaje = document.getElementById('varMensaje');

btnVar.addEventListener('click', function() {
    btnVar.innerText = "REVISANDO...";
    setTimeout(() => {
        btnVar.style.display = 'none';
        varMensaje.classList.remove('hidden');
    }, 1500);
});
