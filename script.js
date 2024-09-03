var ne=Math.floor(Math.random() * (50 - 1) + 1);
function adivinar(){
    var nd=document.getElementById("barra").value;
    if(ne==nd){
        alert("GANASTE");
    }else if(ne>nd){
        alert("EL NÙMERO ES MAYOR");
    }else {
        alert("EL MÙMERO ES MENOR");
    }
}
