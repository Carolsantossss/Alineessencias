const menuMobile = document.getElementById("menuMobile");
const nav = document.getElementById("nav");

menuMobile.addEventListener("click", function () {
    nav.classList.toggle("aberto");
});

const linksMenu = document.querySelectorAll(".nav a");

linksMenu.forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("aberto");
    });
});

const filtros = document.querySelectorAll(".filtro");
const produtos = document.querySelectorAll(".produto-card");

filtros.forEach(function (botao) {
    botao.addEventListener("click", function () {
        filtros.forEach(function (item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        const categoria = botao.getAttribute("data-filter");

        produtos.forEach(function (produto) {
            const categoriaProduto = produto.getAttribute("data-category");

            if (categoria === "todos" || categoria === categoriaProduto) {
                produto.classList.remove("escondido");
            } else {
                produto.classList.add("escondido");
            }
        });
    });
});

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.05)";
    } else {
        header.style.boxShadow = "none";
    }
});

const elementosAnimados = document.querySelectorAll(
    ".produto-card, .sobre-texto, .depoimento"
);

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
            }
        });
    },
    { threshold: 0.15 }
);

elementosAnimados.forEach(function (elemento) {
    elemento.classList.add("animar");
    observer.observe(elemento);
});
