// Variáveis globais
let cont = 0;
let contrast = 0;

// Selecionar os elementos
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

// Adicionar evento para garantir foco no clique
increase.addEventListener("click", function () {
    this.focus(); // Garante que o elemento esteja focado
});
decrease.addEventListener("click", function () {
    this.focus(); // Garante que o elemento esteja focado
});

// Adicionar evento para tecla Enter
increase.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        increaseFont(); // Aumentar fonte
    }
});

decrease.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        decreaseFont(); // Diminuir fonte
    }
});

// Função para aumentar a fonte
function increaseFont() {
    const elementos = document.querySelectorAll("p, a, h1, h2, h3, h4, h5, h6, nav, button, label");
    if (cont < 2) { // Limita o aumento de fonte a 2 vezes
        cont++;
        elementos.forEach(function (elemento) {
            const tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);
            elemento.style.fontSize = tamanhoAtual + 5 + "px";
        });
    }
}

// Função para diminuir a fonte
function decreaseFont() {
    const elementos = document.querySelectorAll("p, a, h1, h2, h3, h4, h5, h6, nav, button, label");
    if (cont > 0) { // Limita a diminuição de fonte a 2 vezes
        cont--;
        elementos.forEach(function (elemento) {
            const tamanhoAtual = parseFloat(window.getComputedStyle(elemento).fontSize);
            elemento.style.fontSize = tamanhoAtual - 5 + "px";
        });
    }
}

function toggleContrast() {
    const body = document.body;
    body.classList.toggle('high-contrast');
    
    console.log(contrast)

    if (contrast == 0) {
        const logoImg = document.querySelector('.bar-container1 img');
        logoImg.src = './assets/logo2.png';

        const images = document.querySelectorAll('#logo-solutions');

        // Novo conjunto de URLs para as imagens
        const newImageUrls = [
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
            './assets/logo-min-white.png',
        ];

        images.forEach((img, index) => {
            if (newImageUrls[index]) { // Verifica se há um URL correspondente
                img.src = newImageUrls[index];
            }
        });
        
        contrast = 1;
    }
    else if (contrast == 1) {
        const logoImg = document.querySelector('.bar-container1 img');
        logoImg.src = './assets/logo.svg';

        const images = document.querySelectorAll('#logo-solutions');

        const newImageUrls = [
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
            './assets/logo-min.png',
        ];

        images.forEach((img, index) => {
            if (newImageUrls[index]) {
                img.src = newImageUrls[index];
            }
        });

        contrast = 0
    }
}