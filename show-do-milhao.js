// objeto perguntas, onde recebe as variáveis:
//pergunta, respostas e resposta certa
//cada pergunta será um NEW PERGUNTAS pois usará a estrutura da função, onde se passam os parametros como se observa abaixo
//se usa o this pois a pergunta, as respostas e a resposta certa serão exclusivas de cada pergunta feita, ou seja, da variavel declarada como new perguntas

function Perguntas(pergunta, respostas, respostaCerta) {
  this.pergunta = pergunta;
  this.respostas = respostas;
  this.respostaCerta = respostaCerta;
}

//função de fazer a pergunta
// "Perguntas.prototype" pois para se criar a função de perguntar, usaremos a estrutura pré definida da função de perguntas, utilizando as variáveis acima declaradas
// "console.log(this.pergunta)" = exibe as perguntas no console do navegador
// "for(let i=  0; i < this.respostas.length; i++)" variavel criada como i valerá 0, iniciando o contador, deverá ser menor que o tamanho do vetor respostas para que se exiba
// todas as respostas da pergunta
// "console.log(i + ':' + this.respostas[i]);" exibira no console do browser o valor do contador + ":" para simbolizar o valor da resposta
// ex.: "5 : azul" = resposta número 5 de valor azul
//+ exibirá as respostas equivalentes a cada valor do vetor

Perguntas.prototype.fazPergunta = function () {
  console.log(this.pergunta);
  for (let i = 0; i < this.respostas.length; i++) {
    console.log(i + ":" + this.respostas[i]);
  }
};

// --------------------------------- !!!!!!!!!!!!!!!!PERGUNTAS!!!!!!!!!!!!!!!!!!!!!!!!!!! ------------------------------------------

let pergunta1 = new Perguntas(
  "Quanto é 1 + 1?", //pergunta entre aspas, sendo o primeiro elemento do objeto perguntas
  ["1", "2", "3", "4"], //respostas entre aspas, sendo o segundo elemento do objeto perguntas
  1 //resposta certa, sendo o terceiro elemento do objeto perguntas
);

let pergunta2 = new Perguntas(
  "Qual a cor do cavalo branco de Napoleão?",
  ["branco", "preto", "azul", "verde", "amarelo"],
  0
);

let pergunta3 = new Perguntas(
  "Qual estilo músical da banda Guns n Roses?",
  ["Funk", "Blues", "Jazz", "Pop", "Rock", "Soul"],
  4
);

// o valor perguntas será armazenado num vetor, onde perguntas contem pergunta 1, 2 e 3 por exemplo, podendo adicionar mais a qlqr momento
let perguntas = [pergunta1, pergunta2, pergunta3];

// perguntas random servirá para deixar a ordem de execução das perguntas aleatoria, logo na função math.random() se multiplica pelo vetor perguntas.length para ter seu tamanho exato
//assim, se o mesmo tiver 15 perguntas, gerará um valor entre 1 e 15
let pergunta_random = Math.floor(Math.random() * perguntas.length);

//randomizar pergunta sempre
randomizar = function(){
    pergunta_random = Math.floor(Math.random() * perguntas.length);
}

//função onde fará a pergunta, receberá a resposta, verificará se é verdadeira e perguntará ao usuario se ele deseja continuar
jogo = function () {
  //verificará a veracidade da resposta
  //se a resposta inserida no prompt do alert for igual a resposta correta atribuida na declaração da pergunta, o console exibirá a mensagem de acerto, caso não, exibirá a de erro
  //função verifica resposta fica dentro de jogo para que ela tenha acesso ao valor da resposta
  Perguntas.prototype.verificaResposta = function () {
    if (resposta == this.respostaCerta) {
      console.log("Você está correto");
    } else {
      console.log("Você errou");
    }
  };

  //embaralhar perguntas
  randomizar();

  //usa o vetor perguntas[pergunta_random] para embaralhar as peguntas e as faz com a função fazer pergunta
  perguntas[pergunta_random].fazPergunta();

  //recebe o valor da resposta da pergunta via prompt, onde se converte o texto inserido para um número
  let resposta = parseInt(prompt("Insira a resposta correta:"));

  //verifica se a resposta para a pergunta aletaória feita é veridica
  perguntas[pergunta_random].verificaResposta(resposta);

  //verifica se o jogador deseja continuar
  //caso o jogador digite 1 ele continuar, caso digite 2 ele para e agradece pela utilização
  let desejaContinuar = parseInt(
    prompt("Deseja continuar? Digite 1 para sim ou 2 para não")
  );

  if (desejaContinuar == 1) {
    jogo();
  } else {
    console.log("Obrigado por ter jogado!");
  }
};
