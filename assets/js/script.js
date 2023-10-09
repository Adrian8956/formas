function calcularTronco(){
    let valor = document.getElementById("resultado");
    let rMaior = parseFloat(document.getElementById("maior").value);
    let rMenor = parseFloat(document.getElementById("menor").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = Math.PI * (rMaior + rMenor) * (rMaior - rMenor + Math.sqrt(Math.pow(altura, 2) + Math.pow(rMaior - rMenor, 2)));
    valor.innerHTML = resultado.toFixed(2);
}

function calcularCirculo(){
    let valor = document.getElementById("resultado");
    let raio = document.getElementById("raio").value;
    let resultado = Math.PI * Math.pow(raio, 2);
    valor.innerHTML = resultado.toFixed(2);
}

function calcularRetangulo(){
    let valor = document.getElementById("resultado");
    let altura = parseFloat(document.getElementById("altura").value);
    let base = parseFloat(document.getElementById("base").value);
    let area = base * altura;
    valor.innerHTML = area.toFixed(2);
}

function calcularCoroa(){
    let valor = document.getElementById("resultado");
    let rMaior = parseFloat(document.getElementById("raioMaior").value);
    let rMenor = parseFloat(document.getElementById("raioMenor").value);
    let area = (Math.PI * Math.pow(rMaior, 2) - (Math.PI * Math.pow(rMenor, 2)));
    valor.innerHTML = area.toFixed(2);
}

function calcularTrapezoide(){
    let valor = document.getElementById("resultado");
    let baseMaior = parseFloat(document.getElementById('baseMaior').value);
    let baseMenor = parseFloat(document.getElementById('baseMenor').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let area = (baseMaior + baseMenor) * altura / 2;
    valor.innerHTML = area.toFixed(2);
}
//  Fórmula para calcular a área = (n . l²) / (4 . tg(π/n))
function calcularPoligono(){
  
    let valor = document.getElementById("resultado");
    let n = parseFloat(document.getElementById('n').value);
    let l = parseFloat(document.getElementById('lado').value);
    let area = (n * Math.pow(l, 2)) / (4 * Math.tan(Math.PI / n));
    valor.innerHTML = area.toFixed(2);
}

function calcularQuadrado(){
    let valor = document.getElementById("resultado");
    let lado = parseFloat(document.getElementById("lado").value);
    let area = Math.pow(lado, 2);
    valor.innerHTML = area.toFixed(2);
}

function calcularSetor(){
    let valor = document.getElementById("resultado");
    let raio = parseFloat(document.getElementById("raio").value);
    let angulo = parseFloat(document.getElementById("angulo").value);
    let area = (Math.PI * Math.pow(raio, 2) * angulo) / 360;
    valor.innerHTML = area.toFixed(2);
}



