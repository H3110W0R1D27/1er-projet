const btnMenu = document.querySelector(".btnMenu");
const barreLaterrale = document.querySelector(".barreLaterrale");

console.log(barreLaterrale);

btnMenu.addEventListener("click", () => {
  barreLaterrale.classList.toggle("barreLaterraleOpen");
});
