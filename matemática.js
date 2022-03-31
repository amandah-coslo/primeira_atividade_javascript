var resposta = Number(prompt('Escolha uma das opções: 1- operações básicas (soma, sub, div e mult), 2- porcentagem, 3- Média Aritmédica, 4- Média Ponderada e 5- sair'));


if (resposta == 1) {
    var operacoesBasicas = function(n1, n2){
        if (opera === "soma") {
            var soma = n1 + n2;
            return console.log('O valor da',opera,'é:',soma);
        } else if (opera === "sub"){
            var sub = n1 - n2;
            return console.log('O valor da',opera,'é:',sub);;
        } else if (opera === "div") {
            var div = n1 / n2;
            return console.log('O valor da',opera,'é:',div);;
        } else if (opera === "mult") {
            var mult = n1 * n2;
            return console.log('O valor da',opera,'é:',mult);
        }
    }

    var n1 = Number(prompt('Número:'));
    var n2 = Number(prompt('Número:'));
    var opera = prompt('operacao: "soma, sub, div ou mult": ');

    if (opera === "soma" || "sub" || "div" || "mult") {
        operacoesBasicas(n1,n2);
    }
} else if (resposta == 2) {
    var percent = Number(prompt('Porcentagem: '));
    var num = Number(prompt('Número: '));
    
    var porcentagem = function(percent, num) {
        formula = (percent / 100)*num;
        return formula;
    }

    var resultado_p = porcentagem(percent, num)

    console.log(percent + '%' + ' de ' + num + ' = ' + resultado_p);  
} else if (resposta == 3) {
    var num = [];
        var contnum = 0;
        function Lista () {
            var quantNotas = Number(prompt('Quantidades de notas desejadas: '));
            for(i = 0; i < quantNotas; i++) {
                num.push(Number(prompt('Digite a nota')));
                contnum += num[i];
            } 
        resultado = contnum / num.length;
    
        return console.log(resultado);

        }
        Lista();

} else if (resposta == 4) {
    var notas = [];
    var pesos = [];
    
    var contPesos = 0;

    var totalNotasPesos = 0;

    var quantNotas = Number(prompt('Digite a quantidade de notas : '));
    for(i = 0; i < quantNotas; i++){
        notas.push(Number(prompt('Digite a nota desejada: ')));
        pesos.push(Number(prompt('Digite o peso da nota:')));
        
        contPesos += pesos[i];

        if(contPesos >= 11){
            console.log('Não é possivel calcular a media');
        }

        totalNotasPesos += (notas[i] * pesos[i]);
    }

    var mPonderada = totalNotasPesos/10;

    console.log('Sua nota é: ' + mPonderada);
} else if (resposta == 5) {
    console.log("Saindo do programa...");
} else{
    console.log("Opção inválida");
}