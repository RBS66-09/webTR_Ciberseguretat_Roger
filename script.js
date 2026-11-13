const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const logo = document.querySelector('.logo-inici');

function activarPestanya(nomTab) {
    tabs.forEach((t) => t.classList.remove('actiu'));
    panels.forEach((p) => p.classList.remove('actiu'));

    const botoDesti = document.querySelector(`.tab[data-tab="${nomTab}"]`);
    const panellDesti = document.getElementById(nomTab);

    if (botoDesti) botoDesti.classList.add('actiu');
    if (panellDesti) panellDesti.classList.add('actiu');
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        activarPestana(tab.dataset.tab);
    });
});

if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        activarPestanya('inici');
    });
}
