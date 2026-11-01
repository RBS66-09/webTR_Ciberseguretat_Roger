const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("activo"));
    panels.forEach((p) => p.classList.remove("activo"));
    tab.classList.add("activo");
    document.getElementById(tab.dataset.tab).classList.add("activo");
  });
});
