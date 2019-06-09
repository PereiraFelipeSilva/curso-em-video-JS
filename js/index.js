const botaoSomar = document.querySelector('.botao-somar')

botaoSomar.addEventListener('click', ()=>{
   let input1 = document.querySelector('#numero1')
   let input2 = document.querySelector('#numero2')
   let resultado = document.querySelector('#resultado')
   let soma = Number(input1.value) + Number(input2.value)

   resultado.value = soma
})
