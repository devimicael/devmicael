const gerar = document.querySelector('[data-button="gerar"]');

function gerarPaletaDeCores() {
    const paleta = {
        hex: "#",
        numeros:  [1, 2, 3, 4, 5, 6, 7, 8, 9],
        letras: ["a", "b", "c", "d", "e", "f"],
        color: ""
    };

    for (let i = 0; i < 3; i++) { 
        paleta.color += paleta.numeros[Math.floor(Math.random() * paleta.numeros.length)];
        paleta.color += paleta.letras[Math.floor(Math.random() * paleta.letras.length)];
    }

    return `${paleta.hex}${paleta.color}`;
}

function gerarElements(color) {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.innerHTML = color;
    return div;
}



function handlePaleta() {
    document.querySelector(".paleta").innerHTML = ``;    
    for(let i=0; i< 5; i++) {
        document.querySelector(".paleta").appendChild(gerarElements(gerarPaletaDeCores()));
    }

    const divs = document.querySelectorAll(".paleta div");
    if(divs.length) {
        divs.forEach(div => {
            div.addEventListener("click", () => {
                document.querySelector("body").style.backgroundColor = div.innerHTML;
            });
        });
    }
}

gerar.addEventListener("click", handlePaleta);
