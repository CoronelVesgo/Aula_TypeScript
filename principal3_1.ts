import { Cliente } from './cliente3_1';
import { Pedido } from './pedido3_1';

const cliente = new Cliente('Dio', 'zawarudo@gmail.com');
const pedido = new Pedido(cliente, 'Diário', 6900);

console.log(pedido.exibirPedido());