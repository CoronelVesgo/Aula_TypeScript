class Funcionario {
    constructor(
        public nome: string,
        public cargo: string,
        public salario: number
    ) { }
    descricao(): string {
        return `Funcionário: ${this.nome},b
        Cargo: ${this.cargo}, 
        Salário: R$${this.salario.toFixed(2)}`;
    }
}
class Gerente extends Funcionario {
    constructor(
        nome: string,
        cargo: string,
        salario: number,
        public departamento: string) {
        super(
            nome,
            cargo,
            salario
        );
    }

    descricaoDepartamento(): string {
        return `${super.descricao()}, 
        Departamento: ${this.departamento
            }`;
    }
}
const gerente = new Gerente(
    'Viktor',
    'RH',
    6900,
    'Administração');

console.log(gerente.descricaoDepartamento());