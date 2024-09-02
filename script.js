var ne=8;
function adivinar(){
    var nd=document.getElementById("barra").value;
    if(ne==nd){
        alert("ADIVINASTE");
    }else if(ne>nd){
        alert("el número es mayor");
    }else {
        alert("el número es menor");
    }
}