function calculadora () {
    const operacao = prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 = Subtração (-)\n 3 - Multiplicação (x)\n 4 = Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)');

    let n1 = Number(prompt('Insira o primeiro valor:  '));
    let n2 = Number(prompt('Insira o segundo valor:  '));
    let resultado;


    function soma() {
        resultado = n1 + n2;
        alert(resultado)
        pergunta()
    }
    function subtracao() {
        resultado = n1 - n2;
        alert(resultado)
        pergunta()
    }
    function multiplicacao() {
        resultado = n1 * n2;
        alert(resultado)
        pergunta()
    }
    function divisaoreal() {
        resultado = n1 / n2;
        alert(resultado)
        pergunta()
    }
    function divisaointeira() {
        resultado = n1 % n2;
        alert(resultado)
        pergunta()
    }
    function potenciacao() {
        resultado = n1 ** n2;
        alert(resultado)
        pergunta()
    }

    function pergunta(){
        let opcao = prompt('Você deseja continuar? 1 = Sim/2 - Não')

        if (opcao ==1) {
            calculadora()
        }else if (opcao == 2) {
            alert('Até mais')
        }else{
            alert('Opção inválida')
            pergunta()
        }
    }
    
    if (operacao ==1) {
        soma();
    }else if (operacao ==2){
        subtracao();
    }else if (operacao ==3){
        multiplicacao();
    }else if (operacao ==4){
        divisaoreal();
    }else if (operacao ==5){
        divisaointeira();
    }else if (operacao ==6){
        potenciacao();
    }

}

calculadora();