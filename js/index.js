function sumar(){
    var input1 = document.getElementById('numero1');
    var input2 = document.getElementById('numero2');
    var res = document.getElementsByClassName('resultado')[0];
    if(isNaN(input1.value)||isNaN(input2.value)){//is not a numeric
        res.style.background = "#ff0000"; //rgb
        res.innerHTML = "Error";
    }
    else{
        var total = parseInt(input1.value) * parseInt(input2.value);
        res.style.background = "green";
        res.innerHTML = total;
    }
    return false;
}

function calcular(){
    var N = document.getElementById("numero").value;
    var lista = document.createElement("ul");
    for(var i=1;i<=N;i++){
        var item = document.createElement("li");
        item.innerHTML = parseInt(Math.random()*100)+1;
        lista.appendChild(item);
    }
    document.getElementsByTagName("body")[0].appendChild(lista);
    return false;
}

document.getElementById("icolor").onchange = function(event){
    var valor = event.target.value;
    var nuevoColor = "linear-gradient("+valor+", #fff)";
    document.getElementsByName("fondo")[0].style.background = nuevoColor;
}
