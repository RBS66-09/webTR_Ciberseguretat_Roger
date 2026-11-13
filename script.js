const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const logo = document.querySelector('.logo-inici');

function activarPestana(nombreTab) {
    tabs.forEach((t) => t.classList.remove('activo'));
    panels.forEach((p) => p.classList.remove('activo'));

    const botonDestino = document.querySelector(`.tab[data-tab="${nombreTab}"]`);
    const panelDestino = document.getElementById(nombreTab);

    if (botonDestino) botonDestino.classList.add('activo');
    if (panelDestino) panelDestino.classList.add('activo');
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activarPestana(tab.dataset.tab);
    });
});

if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        activarPestana('inici');
    });
}
