var resposta = Number(prompt('Escolha uma das opções: 1- Operações básicas, 2- porcentagem, 3- Média Aritmédica e 4- Média Ponderada'));


{
    var soma = function(n1, n2){
        var soma = n1 + n2;
        return soma;
    }

    var sub = function(n1, n2){
        var sub = n1 - n2;
        return sub;
    }

    var div = function(n1, n2){
        var div = n1 / n2;
        return div;
    }

    var mult = function(n1, n2){
        var mult = n1 * n2;
        return mult;
    }

    var calculadora = function(n1, n2, operacao){
        resultado = operacao(n1, n2);
        return resultado;
    }

    var n1 = Number(prompt('Número:'));
    var n2 = Number(prompt('Número:'));
    var opera = prompt('operacao: "soma, sub, div ou mult": ');

    if (opera === "soma") {
        var res = calculadora(n1, n2, soma);
    } else if (opera === "sub") {
        var res = calculadora(n1, n2, sub);
    } else if (opera === "div") {
        var res = calculadora(n1, n2, div);
    } else {
        var res = calculadora(n1, n2, mult);
    }

    console.log('O valor da',opera,'é:',res);
}

{
    var percent = Number(prompt('Porcentagem: '));
    var num = Number(prompt('Número: '));
    
    var porcentagem = function(percent, num) {
        formula = (percent / 100)*num;
        return formula;
    }

    var resultado_p = porcentagem(percent, num)

    console.log(percent + '%' + ' de ' + num + ' = ' + resultado_p);  
}   

{
    var cont = 0;
    var soma = 0;
    var quantNotas = Number(prompt('Quantidades de notas desejadas: '));
    for(i = quantNotas; i > 0; i--) {
        var num = Number(prompt('Digite a nota'));
        soma += num;
        cont += 1;
    }

    var totalNotas = soma / quantNotas;

    console.log('A média Aritmética das notas digitadas é:',totalNotas)
}
/*falta terminar*/
{
    var notas=[];
    var pesos=[];

    var contNotas = 0;
    var contPesos = 0;
    var quantNotas = Number(prompt('Digite a quantidade de notas : '));
    
    for(i = quantNotas; i > 0; i--){
        notas = Number(prompt('Digite a nota desejada: '));
        pesos = Number(prompt('Digite o peso da nota: '));
        
        contNotas += 1;
        contPesos += 1;
        
        if(contPesos >= 11){
            console.log('Não é possivel calcular a media');
        
        }
    }
    
    var mPonderada =(notas[i] * pesos[i])/(contPesos);
    console.log('Sua nota é: ' + mPonderada);
}