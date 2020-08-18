let result = document.getElementById('Result');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let Compare = document.getElementById('Compare');

Compare.addEventListener('click', ()=>{
if(text.value > text2.value){    
    result.innerText = "Number 1 is greater than number 2";
}
if(text2.value > text.value){
    result.innerText = "Number 2 is greater than number 1";
}
if(text.value == text2.value){
    result.innerText = "It´s Equals";
}

});