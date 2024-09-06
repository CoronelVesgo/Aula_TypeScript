function encontrarMaiorElemento<T extends number | string>(array: T[]): T {

    let maior = array[0];

    for (let x = 1; x < array.length; x++) {
        if (array[x] > maior) {
            maior = array[x];
        }
    }

    return maior;
}

const maiorNumero = encontrarMaiorElemento([130, 40, 69]);
const maiorPalavra = encontrarMaiorElemento(['Juca', 'Taturana', 'Viktoria']);


console.log(maiorNumero);
console.log(maiorPalavra);