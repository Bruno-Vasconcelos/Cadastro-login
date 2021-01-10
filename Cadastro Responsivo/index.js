const botao_cadastro = document.querySelector("botao-cadastro");
const botao_logar = document.querySelector("botao-logar");
const container = document.querySelector(".container");

function botao_cadastrofunction(){
    container.classList.add("modo-cadastro");
};

function botao_logarfunction(){
    container.classList.remove("modo-cadastro");
};

