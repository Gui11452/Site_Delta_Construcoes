const cabecalhoA = document.querySelectorAll('.cabecalho nav a');
const [a1, a2, a3, a4, a5] = cabecalhoA;

const cabecalhoOculto = document.querySelector('.cabecalho-oculto');

const fazerOrcamento = document.querySelector('.container-home a');

const cabecalhoOcultoA = document.querySelectorAll('.cabecalho-oculto a');
const [a6, a7, a8, a9, a10, a11] = cabecalhoOcultoA;

const botaoMobile = document.querySelector('.botao-mobile');
const botaoMobileSpan = document.querySelectorAll('.botao-mobile span');
const [botaoMobileSpan1, botaoMobileSpan2, botaoMobileSpan3] = botaoMobileSpan;

const botaoOculto = document.querySelector('.botao-oculto');
const botaoOcultoSpan = document.querySelectorAll('.botao-oculto span');
const [botaoOcultoSpan1, botaoOcultoSpan2] = botaoOcultoSpan;

document.addEventListener('click', e => {

    const el = e.target;
    
    if(el == a1 || el == a2 || el == a3 || el == a4 || el == a5 || el == fazerOrcamento
        || el == a7 || el == a8 || el == a9 || el == a10 || el == a11){
        e.preventDefault();
        const getHref = el.getAttribute('href');
        const to = document.querySelector(getHref).offsetTop;

        scroll({
            top: to - 80,
            behavior: 'smooth'
        })
    }

    if(el == botaoMobile || el == botaoMobileSpan1 || el == botaoMobileSpan2 || el == botaoMobileSpan3){
        cabecalhoOculto.classList.add('cabecalho-oculto-mostrar');
    }

    if(el == botaoOculto || el == botaoOcultoSpan1 || el == botaoOcultoSpan2){
        cabecalhoOculto.classList.remove('cabecalho-oculto-mostrar');
    }

});