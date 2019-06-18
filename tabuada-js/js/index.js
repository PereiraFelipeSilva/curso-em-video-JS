const botao = document.querySelector('.button');

botao.addEventListener('click', () => {
   let inputNumero = document.querySelector('.numero').value;
   let areaResultado = document.querySelector('.lista-resultado');
   areaResultado.innerHTML = '';

   if(inputNumero.length == 0) {
      alert('Digite um número para visualizar a taboada');
   } else {
      areaResultado.classList.add('mostrar-lista');
      for(let multiplicador = 0; multiplicador <= 10; multiplicador++){
         let resultado = Number(inputNumero) * Number(multiplicador);
         let li = document.createElement("li");
         li.innerHTML = `${inputNumero} x ${multiplicador} = ${resultado}`
         areaResultado.appendChild(li)
      };
   };
});