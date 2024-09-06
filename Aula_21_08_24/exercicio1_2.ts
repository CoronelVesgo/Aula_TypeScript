type Pessoa = {
    nome: string;
    idade: number;
}
type Empregado = {
    empresa: string;
    salario: number;
}

type PessoaEmpregada = Pessoa & Empregado

function infoEmpregadoEmpresa(empregado: PessoaEmpregada): string {
    return `Nome: ${empregado.nome}, Idade: ${empregado.idade}, 
    Empresa: ${empregado.empresa}, Salário: R$${empregado.salario.toFixed(2)}.`;
}

const pessoaEmpregadaExemplo: PessoaEmpregada = {
    nome: 'kuka',
    idade: 24,
    empresa: 'oferê cimentos',
    salario: 8500
};

console.log(infoEmpregadoEmpresa(pessoaEmpregadaExemplo));