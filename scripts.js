
function insere(elemento)
{
    var tela = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = tela + elemento;
}

function limpa()
{
    document.getElementById('resultado').innerHTML = "";
}

function deleta(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length-1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}