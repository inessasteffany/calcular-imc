function calcular_imc(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let imc = peso / (altura * altura);
    let res = document.getElementById("res").innerHTML = imc.toFixed(0);
}