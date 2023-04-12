import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log(`Genero: ${cliente.getGenero}`);
            console.log(`Telefones:`);
            cliente.getTelefones.forEach(telefone => {
                console.log(`  - (${telefone.getDdd})${telefone.getNumero}`)
            })
            console.log(`--------------------------------------`);
        });
        console.log(`\n`);
    }
    public listar_index(): void{
        let index: number = 0;
        this.clientes.forEach(cliente => {
            console.log(`${index}:`);
            console.log(`  Nome: ${cliente.nome}`); 
            console.log(`  Nome social: ${cliente.nomeSocial}`);
            console.log(`  CPF: ${cliente.getCpf.getValor}`);
            console.log(`  Genero: ${cliente.getGenero}`);
            console.log(`--------------------------------------`);
            index++;
        });
    }
    public listar_cliente(index: number): void{
        let cliente = this.clientes[index]
        console.log('Cliente selecionado:')
        console.log(`  Nome: ${cliente.nome}`); 
        console.log(`  Nome social: ${cliente.nomeSocial}`);
        console.log(`  CPF: ${cliente.getCpf.getValor}`);
        console.log(`  Genero: ${cliente.getGenero}`);
        console.log(`--------------------------------------`);
    }
}