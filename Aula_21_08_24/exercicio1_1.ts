interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function exibirTransacao(produto: Produto, pagamento: FormaPagamento): string {
    return 'produto: ${produto.nome}, Categoria: ${produto.categoria}, Preco: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.';
}
const expTransacao: Produto = { nome: 'PC', preco: 5000, categoria: 'eletronico' } 
const expFormaPagamento: FormaPagamento = 'dinheiro';

console.log(exibirTransacao(expTransacao, expFormaPagamento));