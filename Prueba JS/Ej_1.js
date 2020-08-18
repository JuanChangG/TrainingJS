const result = document.getElementById('result');
const text= document.getElementById('text');
const generate = document.getElementById('generate');
const Age=document.getElementById('Age');
const AgesL=document.getElementById('AgesL');
const Agehead=document.getElementById('Agehead');
const Calhead=document.getElementById('Calhead');
const Calt=document.getElementById('Calt');
const Califi=document.getElementById('Califi');
generate.addEventListener('click',listener=()=>{
    result.innerText=text.value;
})
Age.addEventListener('click',listener=()=>{

    if(Number(AgesL.value)<18)Agehead.innerText="No conduce";
    else if(Number(AgesL.value)>=18)Agehead.innerText="Conduce";
    else Agehead.innerText="Por favor Colocar un valor valido";
})
Califi.addEventListener('click',listener=()=>{
    switch(Number(Calt.value)){
        case 0:Calhead.innerText="Muy Deficiente";
        break;
        case 1:Calhead.innerText="Muy Deficiente";
        break;
        case 2:Calhead.innerText="Muy Deficiente";
        break;
        case 3:Calhead.innerText="Insuficiente";
        break;
        case 4:Calhead.innerText="Insuficiente";
        break;
        case 5:Calhead.innerText="Suficiente";
        break;
        case 6:Calhead.innerText="Suficiente";
        break;
        case 7:Calhead.innerText="Notable";
        break;
        case 8:Calhead.innerText="Notable";
        break; 
        case 9:Calhead.innerText="Sobresaliente";
        break;
        case 10:Calhead.innerText="Sobresaliente";
        break;
        default:Calhead.innerText="Por favor Colocar un valor valido";
    }
})