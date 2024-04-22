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
        return [dias,horas,minutos,segundos]
    } else {
        return [0,0,0,0];
    }
}
document.getElementById("dias0").textContent = calculaTempo(tempos[0])[0];
document.getElementById("horas0").textContent = calculaTempo(tempos[0])[1];
document.getElementById("min0").textContent = calculaTempo(tempos[0])[2];
document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];



for (let i=0; i<contadores.length;i++){
    document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
    document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
    document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
    document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];
}


document.getElementById("seg0").textContent = calculaTempo(tempos[0])[3];
document.getElementById("seg1").textContent = calculaTempo(tempos[1])[3];
document.getElementById("seg2").textContent = calculaTempo(tempos[2])[3];
document.getElementById("seg3").textContent = calculaTempo(tempos[3])[3];

const tempoObjetivo1 = new Date("2023-10-05T00:00:00");




