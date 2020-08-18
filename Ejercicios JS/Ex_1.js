let result = document.getElementById('result');
let text = document.getElementById('text');
const generate = document.getElementById('generate');

const edadUsuario = parseInt(prompt("¿Cuál es tu edad?"));
if(edadUsuario >= 18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad");
}

generate.addEventListener('click', () =>{
    
    if(text.value <= 3){
        result.innerText = "muy deficiente";
    }
    else if(text.value > 3 && text.value <= 5){
        result.innerText = "insuficiente";
    }
    else if(text.value > 5 && text.value <= 6){
        result.innerText = "Suficiente";
    }
    else if(text.value > 6 && text.value <= 7){
        result.innerText = "Bien";
    }
    else if(text.value > 7 && text.value <= 9){
        result.innerText = "Notable";
    }
    else if(text.value > 9 && text.value <= 10){
        result.innerText = "Sobresaliente";
    } 
   
});


