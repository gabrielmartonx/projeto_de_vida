/*Aula 4
A declaração const indica que se trata de uma variável que não será alterada
 em nenhuma instância do código.Isso significa que serão sempre quatro botões.
 Vamos declarar a variável const botoes, e atribuir a ela um comando que busca tudo
 que existe a classe botão.Queremos todas as informações relacionadas à classe, 
 por isso utilizaremos o querySelectorAll(), cujo interior dos parênteses receberá um
 .botao entre aspas, assim como nomeamos uma classe.*/

/*Laço de repetição for para adicionar um evento de escuta, principalmente quando os 
botões forem clicados, porque quando houver um clique, ele precisa adicionar a classe ativo no botão clicado.*/ 

/*Entre os parênteses de for(), o primeiro valor a ser adicionado é a declaração da variável i. 
Essa variável vai mudar ao longo do tempo no código, então ela é uma variável do tipo let. 
Vamos iniciá-la com o valor 0.Este laço irá se repetir enquanto i for menor que o comprimento dos botões 
(ou seja, botões.length) e vai incrementar de um por meio do comando i++, que é a mesma coisa que i = i + 1.*/

/*Adicionar um evento de escuta para  realizar uma ação,chamamos de .onClick(). Vamos abrir uma linha entre a 
declaração do for() e  adicionar botoes[i].onclick.*/ 

/*Esse on click, vai perguntar as ações que queremos realizar. E quando agrupamos uma série de comandos, 
criamos uma função.Então, à direita de botoes[i].onclick, adicionaremos um sinal de igual e uma function() 
com um bloco de chaves.Ela só precisa realizar uma tarefa para nós e para essa tarefa, quando ela for ativada, 
o botoes na posição i adicione a classe ativo. Adicionaremos entre as chaves da função um 
botoes[i].classList.add("ativo").*/

/*OBS: Antes de adicionar a classe ativo, poderíamos remover todas as classes ativo de todos os botões
 e só adicionar naquele que desejamos que receba a classe, então diremos ao sistema "remova", faremos um 
 laço de repetição for() dentro das chaves da function(), acima da linha que adiciona a classe.
 Esse laço receberá entre parênteses a variável let j=0, em seguida, adicionaremos o j++.
 Em vez de adicionar, vamos remover. Portanto, adicionaremos entre as chaves do for() um botoes na posição j 
 junto ao .classList.remove("ativo").

const botoes = document.querySelectorAll(".botao");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
    }
}
*/

/*Aula 5
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;



//Aula6 - conversão dos números em segundos, minutos, horas e dias.

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2023-10-05T00:00:00");

//chamar uma função chamada calculaTempo(), que terá como parâmetro de entrada o tempoObjetivo1.
contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}*/

//Aula7 - Automatizando atualizações

const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {

        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

/*1ª explicação

// definição do tempo dos objetivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-10-30T00:00:00");
const tempoObjetivo3 = new Date("2024-11-05T00:00:00");
const tempoObjetivo4 = new Date("2024-12-30T00:00:00");

//chamar uma função chamada calculaTempo(), que terá como parâmetro inicial de entrada o tempoObjetivo1.
contadores[0].textContent = calculaTempo(tempoObjetivo1); //aba de divisão de conteúdo, que vai receber a função
contadores[1].textContent = calculaTempo(tempoObjetivo2); //aba de divisão de conteúdo, que vai receber a função
contadores[2].textContent = calculaTempo(tempoObjetivo3); //aba de divisão de conteúdo, que vai receber a função
contadores[3].textContent = calculaTempo(tempoObjetivo4); //aba de divisão de conteúdo, que vai receber a função

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
 
 return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos";
}
Fim da 1ª explicação*/ 

/*2ª explicação - Automatizando o código:

// definição do tempo dos objetivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
const tempoObjetivo2 = new Date("2024-10-30T00:00:00");
const tempoObjetivo3 = new Date("2024-11-05T00:00:00");
const tempoObjetivo4 = new Date("2024-12-30T00:00:00");

//automatizar o código, criar uma variável chamada tempos, que receberá uma lista.
const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

//laço de repetição que altera automaticamente o valor do índice para 0, 1, 2 e 3,automatizando o código.
/*for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[0]);
    }

//substituindo o valor do índice (0) pela variável contadora i.
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
    }
*/

//3ª explicação - função para atualizar o cronômetro:

// definição do tempo dos objetivos
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-04-30T00:00:00");
const tempoObjetivo2 = new Date("2024-10-15T00:00:00");
const tempoObjetivo3 = new Date("2024-12-06T00:00:00");
const tempoObjetivo4 = new Date("2025-12-30T00:00:00");
const tempoObjetivo5 = new Date("2025-11-27T00:00:00");

//automatizar o código, criar uma variável chamada tempos, que receberá uma lista.
const tempos =
[tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4,tempoObjetivo5];

/*substituindo o valor do índice (0) pela variável contadora i.
for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
    }*/

//função para atualizar o cronômetro e no escopo da função (entre chaves) adicionar o laço de repetição.
function atualizaCronometro(){
    for (let i=0; i<contadores.length;i++){
        document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
        document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
        document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
        document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
    }
}   

//após a declaração da função, chamamos por ela novamente:

function comecaCronometro(){
    atualizaCronometro();
    setInterval(atualizaCronometro,1000);
}

comecaCronometro();

function calculaTempo(tempoObjetivo) {
    let tempoAtual = new Date();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;
    if (tempoFinal > 0){
        return [dias, horas, minutos, segundos];
    } else {
        return [0,0,0,0];
    }
}
/*se o tempo for menor que zero, devemos programar para
que seja exibida uma mensagem de que o prazo foi esgotado. Dessa
forma, a contagem do tempo que resta ocorrerá apenas se esse tempo
for positivo.*/