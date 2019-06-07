const botaoSomar = document.querySelector('.botao-somar')

botaoSomar.addEventListener('click', function(){
   let input1 = document.querySelector('#numero1')
   let input2 = document.querySelector('#numero2')
   let resultado = document.querySelector('.resultado')

   let resposta = Number(input1.value) + Number(input2.value)
   resultado.textContent = resposta
})