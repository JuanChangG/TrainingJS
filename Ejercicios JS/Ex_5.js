let altura = document.getElementById('Altura');
let edad = document.getElementById('Edad');
let sexo = document.getElementById('Sexo');
let peso = document.getElementById('Peso');
let calcular = document.getElementById('Calcular');

calcular.addEventListener('click', () => {
    if (sexo.value == "h" || sexo.value == "H") {
        let result = 0;
        result = 50 + (((altura.value - 150) / 4) * 3) + ((edad.value - 20) / 4);
        alert("Tu peso para estar guapa es :" + result);
    }

    else (sexo.value == "m" || sexo.value == "M") 
        let result = 0;
        result = (50 + (((altura.value - 150) / 4) * 3) + ((edad.value - 20) / 4)) * 0.9;
        alert("Tu peso para estar guapa es :" + result);
    }
    
);
