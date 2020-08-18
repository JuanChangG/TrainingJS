const resultado = document.getElementById('Resultado');
const calcular = document.getElementById('calcular');
const temperatura = document.getElementById('temperatura');


calcular.addEventListener('click', () =>{
    CelciusToFahrenheit(temperatura.value);
  
});

function CelciusToFahrenheit(celsius){
    const calculaTemperatura = celsius;
    const celciusToFahr = calculaTemperatura * 9 / 5 + 32;
    const calculo = calculaTemperatura + '\xB0C is' + ' ' +  celciusToFahr + '\xB0F.';
    alert(calculo);
    console.log(calculo);
    
    if(celciusToFahr >= 14 && celciusToFahr <= 32){
        alert("Temperatura baja, andas Frío Homms");
    }
    else if(celciusToFahr >= 32 && celciusToFahr <= 68){
        alert("Temperatura adecuada, andas al 100 viejon");
    }
    else if(celciusToFahr >= 68 && celciusToFahr <= 96){
        alert("Temperatura alta, andas caliente, atascao");
    }  
    else {
        alert("Temperatura desconocida, Tas bien o khe? V:");
    }  
}

