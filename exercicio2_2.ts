class ContaBancaria {

    constructor(public titular: string, public saldo: number) { }

    exibirSaldo(): string {
        return `Titular: ${this.titular}, 
            Saldo: R$${this.saldo.toFixed(2)}`;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(
        titular: string,
        saldo: number,
        public limiteCredito: number
    ) {

        super(titular, saldo);

    }

    saldoTotal(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, 
            Saldo total com crédito!: R$${saldoTotal.toFixed(2)}`;
    }
}

const contaCorrente = new ContaCorrente('Valdemar', 10, 900000);

console.log(contaCorrente.saldoTotal());