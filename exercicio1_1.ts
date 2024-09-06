interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function Transacao(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço:
    R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
};

const produto: Produto = {
    nome: 'Dark Sus',
    preco: 399,
    categoria: 'Jogo',
}

const formaPagamento: FormaPagamento = 'dinheiro';

console.log(produto, formaPagamento)