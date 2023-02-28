const title = document.createElement('h1');
const textTitle = document.createTextNode('Contador em Javascript');
const numCounter = document.createElement('h2');
numCounter.id = 'output';
const textNumCounter = document.createTextNode('0');
const divWithClass = document.createElement('div');
divWithClass.className = 'container-contador'

const btnAdd = document.createElement('button');
btnAdd.id = 'adicionar'
const textBtnAdd = document.createTextNode('Incrementar')
const btnSubtract = document.createElement('button');
btnSubtract.id = 'subtrair'
const textBtnSub = document.createTextNode('Decrementar')
const sectionMain = document.querySelector("main");
const subtrair = document.querySelector("#subtrair");
const adicionar = document.querySelector("#add");
const output = document.querySelector("#output");
const btnZerar = document.createElement('button');
const textBtnZerar = document.createTextNode('Zerar');

//Inserindo os textos nos elementos criados
title.appendChild(textTitle);
btnAdd.appendChild(textBtnAdd);
btnSubtract.appendChild(textBtnSub);
numCounter.appendChild(textNumCounter);
btnZerar.appendChild(textBtnZerar);

//Inserindo os elementos dentro da div principal
divWithClass.appendChild(title)
divWithClass.appendChild(numCounter)
divWithClass.appendChild(btnSubtract)
divWithClass.appendChild(btnZerar)
divWithClass.appendChild(btnAdd)

sectionMain.appendChild(divWithClass)

function pintar () {
    if (Number(numCounter.innerText) % 2 === 0) {
        numCounter.style.color = 'green'
    } 
    if (Number(numCounter.innerText) % 2 !== 0) {
        numCounter.style.color = 'red'
    }
}

btnAdd.addEventListener("click", function() {
    let result = Number(numCounter.innerText) + 1;

    if (result > 10) {
        result = 10
    }        
    numCounter.innerText = result
    pintar()
})

btnSubtract.addEventListener("click", function() {
   let result = Number(numCounter.innerText) - 1;

    if (result < 0) {
        result = 0
    }
    numCounter.innerText = result;
    pintar()
})

btnZerar.addEventListener("click", function() {
    let result = 0;
    numCounter.innerText = result;
})
