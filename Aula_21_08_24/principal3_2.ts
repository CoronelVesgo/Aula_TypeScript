import { Financeiro } from './financeiro3_2';

const orcamentoExemplo = new Financeiro.Orcamento(
    9000,
    ['Pc Gamer', 'Mouse']);

console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(
    9000,
    0.15);
console.log(`Preço com Imposto: R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calcularDesconto(9000,
    0.10);
console.log(`Preço com Desconto: R$${valorComDesconto.toFixed(2)}`);