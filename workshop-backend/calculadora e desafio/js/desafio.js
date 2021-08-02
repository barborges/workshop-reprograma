var spanValorTotal = document.querySelector("#resposta");
var inputValorHora = document.querySelector("#valor-hora");
var inputHorasProjeto = document.querySelector("#horas-projeto");

function calcularProjeto () {
        var ValorProjeto = inputHorasProjeto.valueAsNumber * inputValorHora.valueAsNumber;
        spanValorTotal.textContent = "R$" + ValorProjeto;
}
