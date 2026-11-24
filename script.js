const pestanyes = document.querySelectorAll('.pestanya');
const panells = document.querySelectorAll('.panell');
const logo = document.querySelector('.logo-inici');

function activarPestanya(nomPestanya) {
  pestanyes.forEach((p) => p.classList.remove('activa'));
  panells.forEach((pn) => pn.classList.remove('actiu'));

  const botoDesti = document.querySelector(`.pestanya[data-tab="${nomPestanya}"]`);
  const panellDesti = document.getElementById(nomPestanya);

  if (botoDesti) botoDesti.classList.add('activa');
  if (panellDesti) panellDesti.classList.add('actiu');
}

pestanyes.forEach((pestanya) => {
  pestanya.addEventListener('click', () => {
    activarPestanya(pestanya.dataset.tab);
  });
});

if (logo) {
  logo.addEventListener('click', (e) => {
    e.preventDefault();
    activarPestanya('inici');
  });
}
