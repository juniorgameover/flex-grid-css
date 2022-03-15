const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo'); /*escreve dentro da tag menu-lateral a classe passada no argumento*/ 
}) 

/* funcão que recebe dois parâmetros, o primeiro indica quel o evento se espera escutar
o segundo é a função que deve ser executada ao escutar o evento esperado
*/