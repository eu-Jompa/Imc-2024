const peso = document.querySelector("#peso")
const altura = document.querySelector("#altura")
const CalculoBtn = document.querySelector("#calculo")
const windowsResultado = document.querySelector(".resultado");
const resposta= document.createElement("span");


CalculoBtn.addEventListener('click',resultado);
const windowsBackground = document.getElementsByTagName('body');
const abaixoPeso = document.querySelector(".abaixo");
const normalPeso = document.querySelector(".normal");
const SobrePeso = document.querySelector(".sobrepeso");
const grau1 = document.querySelector(".grau1");
const grau2 = document.querySelector(".grau2");
const grau3 = document.querySelector(".grau3");


function resultado(){
    const pesovalor = parseFloat(peso.value);
    const alturavalor = parseFloat(altura.value);
    var result= pesovalor/(alturavalor*alturavalor);
    windows(result.toFixed(2));
}

function windows(result){
    resposta.textContent = `seu imc é: ${result}`;
    if(result<=18.5){
        document.body.style.backgroundColor = "#e5ff00";
        abaixoPeso.style.backgroundColor = "#e5ff00";
        normalPeso.style.backgroundColor = "#ffffff";
        SobrePeso.style.backgroundColor = "#ffffff";
        grau1.style.backgroundColor = "#ffffff";
        grau2.style.backgroundColor = "#ffffff";
        grau3.style.backgroundColor = "#ffffff";
    }
    else if(result>=18.6 && result<=24.9){
        document.body.style.backgroundColor = "#26d32f";
        abaixoPeso.style.backgroundColor = "#ffffff";
        normalPeso.style.backgroundColor = "#26d32f";
        SobrePeso.style.backgroundColor = "#ffffff";
        grau1.style.backgroundColor = "#ffffff";
        grau2.style.backgroundColor = "#ffffff";
        grau3.style.backgroundColor = "#ffffff";
    }
    else if(result>=25.0 && result <=29.9){
        document.body.style.backgroundColor ="#e8ff15"; 
        abaixoPeso.style.backgroundColor = "#ffffff";
        normalPeso.style.backgroundColor = "#ffffff";
        SobrePeso.style.backgroundColor = "#ffffff"
        SobrePeso.style.backgroundColor = "#e8ff15";
        grau1.style.backgroundColor = "#ffffff";
        grau2.style.backgroundColor = "#ffffff";
        grau3.style.backgroundColor = "#ffffff";
    }
    else if(result>=30.0 && result<=34.9) {
        document.body.style.backgroundColor ="#ffc815"; 
        abaixoPeso.style.backgroundColor = "#ffffff";
        normalPeso.style.backgroundColor = "#ffffff";
        SobrePeso.style.backgroundColor = "#ffffff";
        grau1.style.backgroundColor = "#ffc815";
        grau2.style.backgroundColor = "#ffffff";
        grau3.style.backgroundColor = "#ffffff";
    }
    else if(result>=35.0 && result<=39.9){
        document.body.style.backgroundColor ="#ffa115"; 
        abaixoPeso.style.backgroundColor = "#ffffff";
        normalPeso.style.backgroundColor = "#ffffff";
        SobrePeso.style.backgroundColor = "#ffffff";
        grau1.style.backgroundColor = "#ffffff";
        grau2.style.backgroundColor = "#ffa115";
        grau3.style.backgroundColor = "#ffffff";
    }
    else if(result>=40.0){
        document.body.style.backgroundColor = "#ff2515";
        normalPeso.style.backgroundColor = "#ffffff";
        SobrePeso.style.backgroundColor = "#ffffff";
        grau1.style.backgroundColor = "#ffffff";
        
        grau2.style.backgroundColor = "#ffffff";
        abaixoPeso.style.backgroundColor ="#ffffff";
        grau3.style.backgroundColor = "#ff2515";
    } else{
        resposta.textContent = `Preencha corretamente os campos`;
    }
    
    windowsResultado.appendChild(resposta);
    function ValoresWindows(result){

    }
}