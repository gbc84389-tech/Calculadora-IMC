function calculoIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let alturaCm = parseFloat(document.getElementById("altura").value);

    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
        document.getElementById("imc").textContent = "";
        document.getElementById("mensagem").textContent = "Por favor, preencha peso e altura com valores válidos!";
        return;
    }
    let alturaMetros = alturaCm / 100;

    let imc = peso / (alturaMetros * alturaMetros);

    document.getElementById("imc").textContent = "Seu IMC é: " + imc.toFixed(2);

    document.getElementById("mensagem").textContent = "";
}

calculoIMC(peso, altura);