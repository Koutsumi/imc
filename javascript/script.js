

function alteraValPeso (input){
    let peso = document.getElementById('result_peso')
    peso.innerText = input.value
}

function alteraValAltura (input){
    let altura = document.getElementById('result_altura')
    altura.innerText = input.value
}

var valorPeso = document.getElementById('result_peso')
var valorAltura = document.getElementById('result_altura')


function resultado(){
    
    imc = (valorPeso.innerHTML / (valorAltura.innerHTML **2))


    if(imc < 18.5){
        document.querySelector('.result').classList.add("red-result");
        document.getElementById('resultado').innerHTML = ` <p>Resultado :${imc.toFixed(2)}</p> <p>Classificação : Magreza</p> <span>Procure um nutricionista</span>`
    }
    else if(imc < 24.9){
        document.querySelector('.result').classList.add("green-result");
        document.getElementById('resultado').innerHTML = ` <p>Resultado : ${imc.toFixed(2)}</p> <p>Classificação : Normal</p> <span>Você está dentro do peso ideal</span>`

    }
    else if (imc <= 30){
        document.querySelector('.result').classList.add("yellow-result");
        document.getElementById('resultado').innerHTML = ` <p>Resultado : ${imc.toFixed(2)}</p> <p>Classificação : Sobrepeso</p> <span>Procure um nutricionista</span>`

    }
    else if (imc > 30){
        document.querySelector('.result').classList.add("red-result");
        document.getElementById('resultado').innerHTML = ` <p>Resultado : ${imc.toFixed(2)}</p> <p>Classificação : Obesidade</p> <span>Procure um nutricionista</span>`
    }
}

// const peso = parseFloat(document.getElementById("peso").value);
// const altura = parseFloat(document.getElementById("altura").value);


// // console.log(imc)
// let imc = '';
// function calcIMC(){
//     console.log(peso)
//     console.log(altura)
//     imc =  peso / ((altura/100) ** 2)
//     document.getElementById('resultado').innerText = `resultado ${imc}`
// }