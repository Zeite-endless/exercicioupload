    var texto = document.getElementById("mudanca");
    texto.addEventListener("click", function(){
        if(texto.className == "op1") {
            texto.className = "op2";
        }
        else texto.className = "op1";
    });