const buttonMenu = document.querySelector("nav button");
const navMenu = document.querySelector("nav ul");

buttonMenu.addEventListener("click", () => {
    navMenu.classList.toggle("menu-visible");

    if (navMenu.classList.contains("menu-visible")){
        buttonMenu.setAttribute("arial.label", "Cerrar menú");
    }else{
        buttonMenu.setAttribute("arial-label", "Abrir menú");
    }
  })