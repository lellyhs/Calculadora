var primeiroValor = parseInt(prompt('Digite o primeiro valor: '))
var segundoValor = parseInt(prompt('Digite o segundo valor: '))

var operacao = prompt('Digite: \n 1 - para divisão \n 2 - para multiplicação \n 3 - para soma \n 4 - para subtração')

var resultado
if (operacao == 1) {
  resultado = primeiroValor / segundoValor;
  document.write('<h2>' + primeiroValor + ' / ' + segundoValor + ' = ' + resultado + '</h2>');
} else if (operacao == 2) {
    resultado = primeiroValor * segundoValor;
    document.write('<h2>' + primeiroValor + ' x ' + segundoValor + ' = ' + resultado + '</h2>');
} else if (operacao == 3) {
    resultado = primeiroValor + segundoValor;
    document.write('<h2>' + primeiroValor + ' + ' + segundoValor + ' = ' + resultado + '</h2>');
} else if (operacao == 4) {
    resultado = primeiroValor - segundoValor;
    document.write('<h2>' + primeiroValor + ' - ' + segundoValor + ' = ' + resultado + '</h2>');
} else {
  document.write('<h2>Opção invalida!</h2>')
}