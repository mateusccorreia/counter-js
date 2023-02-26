const title = document.createElement('h1');
const textTitle = document.createTextNode('Contador em Javascript');
const divWithClass = document.createElement('div');
divWithClass.className = 'containter-contador'

const btnAdd = document.createElement('button');
btnAdd.id = 'adicionar'
const textBtnAdd = document.createTextNode('+')
const btnSubtract = document.createElement('button');
btnSubtract.id = 'subtrair'
const textBtnSub = document.createTextNode('-')
const spanOutput = document.createElement('span');
spanOutput.id = 'output'
const textSpan = document.createTextNode('0')
const sectionMain = document.querySelector("main");
const subtrair = document.querySelector("#subtrair");
const adicionar = document.querySelector("#add");
const output = document.querySelector("#output");

//Inserindo os textos nos elementos criados
title.appendChild(textTitle);
btnAdd.appendChild(textBtnAdd);
btnSubtract.appendChild(textBtnSub);
spanOutput.appendChild(textSpan)

//Inserindo os elementos dentro da div principal
divWithClass.appendChild(title)
divWithClass.appendChild(btnSubtract)
divWithClass.appendChild(spanOutput)
divWithClass.appendChild(btnAdd)

sectionMain.appendChild(divWithClass)

function addAndSubtract () {
    btnAdd.addEventListener("click", function() {
        let result = Number(spanOutput.innerText) + 1;

        if (result > 10) {
            result = 10
        }
        spanOutput.innerText = result
    })
    btnSubtract.addEventListener("click", function() {
        let result = Number(spanOutput.innerText) - 1;

        if (result < 0) {
            result = 0
        }
        spanOutput.innerText = result;
    })
}

addAndSubtract();
