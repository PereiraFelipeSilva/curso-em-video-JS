let nome = window.prompt('Qual é o seu nome?')
let genero = window.prompt('Qual o seu gênero?')

function saudacao(){
   if(genero == 'm'){
      alert(`Seja bem vindo, ${nome}!`)
   }else if(genero == 'f'){
      alert(`Seja bem vinda, ${nome}!`)
   }else if(genero == 'i'){
      alert(`Seja bem vindx, ${nome}!`)
   }
}

saudacao()