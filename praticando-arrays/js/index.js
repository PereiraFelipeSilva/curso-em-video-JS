let botaoAdicionar = document.querySelector('#botao-adicionar');
let inputNumero = document.querySelector('.input-numero');

let valores = [];

let areaNumeros = document.querySelector('.area-numeros')
let lista = document.querySelector('.array-numeros');
let botaoFinalizar = document.querySelector('#botao-finalizar');

let botaoReiniciar = document.querySelector('.jogar-novamente');

let resultados = document.querySelector('.resultados');

function verificaNumero(numero) {
   if(Number(numero) >= 1 && Number(numero) <= 100) {
      return true
   } else {
      return false
   }
};

function verificaArray(numero, lista) {
   if(lista.indexOf(Number(numero)) != -1) { /* valor -1 indica que o número não existe dentro do array */
      return true
   } else {
      return false
   }
}

function addElementOnArray() {
   valores.push(Number(inputNumero.value))
   let li = document.createElement('li')
   li.innerHTML = `Valor ${inputNumero.value} adicionado`
   lista.appendChild(li)
   areaNumeros.classList.add('show-content')
   resultados.innerHTML = ''
}

botaoAdicionar.addEventListener('click', () => {
   if(verificaNumero(inputNumero.value) && !verificaArray(inputNumero.value, valores)) {
      addElementOnArray()
   } else {
      alert('Número inválido ou já inserido')
   }
   inputNumero.value = ''
   inputNumero.focus()
});


botaoFinalizar.addEventListener('click', () => {
   let tamanhoArray = valores.length
   let maiorNumero = valores[0]
   let menorNumero = valores[0]
   let soma = 0
   let media = 0
   for(let position in valores) {
      soma += valores[position]
      if(valores[position] > maiorNumero) {
         maiorNumero = valores[position]
      }
      if(valores[position] < menorNumero) {
         menorNumero = valores[position]
      }
   }
   media = soma / tamanhoArray
   resultados.innerHTML = ''
   resultados.innerHTML += `Ao todo, foram informados ${tamanhoArray} valores. <br/>`
   resultados.innerHTML += `O maior número informado é ${maiorNumero}. <br/>`
   resultados.innerHTML += `O menor número informado é ${menorNumero}. <br/>`
   resultados.innerHTML += `A soma dos valores é ${soma}. <br/>`
   resultados.innerHTML += `A media dos valores é ${media}.`
});

botaoReiniciar.addEventListener('click', ()=> {
   valores = []
   resultados.innerHTML = ''
   lista.innerHTML = ''
   areaNumeros.classList.remove('show-content')
   inputNumero.focus();
})