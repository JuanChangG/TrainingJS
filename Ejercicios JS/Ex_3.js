function random(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function generaAletorio(){
    const numeros = document.getElementById("numeros");
    let numerosGenerados = "";
    for(let i = 0; i<6; i++){
        numerosGenerados += "<option>" + random(1,100) + "</option>";
    }
    numeros.innerHTML = numerosGenerados;
}