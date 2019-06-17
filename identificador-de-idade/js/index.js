const button = document.querySelector('.verificar');

button.addEventListener('click', (event) => {
   event.preventDefault();

   let ano = document.querySelector('.input-ano');
   let sexo = document.getElementsByName('input-sexo');
   let resultado = document.querySelector('.imagem');
   let anoAtual = new Date().getFullYear();
   let idade = anoAtual - ano.value;
   let genero = '';
   let img = document.createElement('img');
   img.setAttribute('id', 'foto')
   
   if(Number(ano.value) < 1900 || Number(ano.value) > anoAtual ) {
      alert('Confira os dados e tente novamente!')
   } else {
      if(sexo[0].checked) {
         genero = 'homem';

         if(idade > 0 && idade < 10) {
            img.setAttribute('src', 'img/boy.jpg')
            img.style.borderRadius = '50%';
         } else if(idade < 50) {
            img.setAttribute('src', 'img/man.jpg')
            img.style.borderRadius = '50%';
         } else if(idade > 50) {
            img.setAttribute('src', 'img/old-man.jpg')
            img.style.borderRadius = '50%';
         }
      } else if(sexo[1].checked) {
         genero = 'mulher';

         if(idade > 0 && idade < 10) {
            img.setAttribute('src', 'img/girl.jpg')
            img.style.borderRadius = '50%';
         } else if(idade < 50) {
            img.setAttribute('src', 'img/woman.jpg')
            img.style.borderRadius = '50%';
         } else if(idade > 50) {
            img.setAttribute('src', 'img/old-woman.jpg')
            img.style.borderRadius = '50%';
         }
      }
      resultado.innerHTML = `Você é ${genero} e tem ${idade} anos`;
      resultado.appendChild(img)
   }

});

