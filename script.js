const formatarDigito = (numero) => String(numero).padStart(2, "0");

function atualizarContador() {
    const evento = new Date("2026-10-09T12:00:00");
    const agora = new Date();
    let restante = Math.floor((evento - agora) / 1000);

    if (restante < 0) restante = 0;

    const dias = Math.floor(restante / 86400);
    const horas = Math.floor((restante % 86400) / 3600);
    const minutos = Math.floor((restante % 3600) / 60);
    const segundos = restante % 60;

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = formatarDigito(horas);
    document.getElementById("minutos").textContent = formatarDigito(minutos);
    document.getElementById("segundos").textContent = formatarDigito(segundos);
}

if (document.getElementById("dias")) {
    atualizarContador();
    setInterval(atualizarContador, 1000);
}

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nav-menu");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("open");
    });

    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => menu.classList.remove("open"));
    });
}
