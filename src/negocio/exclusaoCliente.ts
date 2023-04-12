import Exclusao from "./exclusao";
import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import ListagemClientes from "./listagemClientes";

export default class ExclusaoCliente extends Exclusao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private listagem: ListagemClientes;
    
    constructor (clientes: Array<Cliente>){
        super();
        this.clientes = clientes;
        this.entrada = new Entrada;
        this.listagem = new ListagemClientes(this.clientes);
    }


    public excluir(): void {
        console.log('\nInicio da exclusão do cliente');
        this.listagem.listar_index();
        let index = this.promptLista();
        let confirma = this.confirmaExclusao(index);
        if (confirma == "s"){
            this.clientes.splice(index, 1);
        } else {
            console.log("Operacao abortada.")
        }
    }


    private confirmaExclusao(index: number): string {
        this.listagem.listar_cliente(index);
        let confirmacao = this.entrada.receberTexto("Tem certeza que quer excluir? [s/n]: ");
        while (confirmacao != "s" && confirmacao != "n"){
            confirmacao = this.entrada.receberTexto("Insira um valor valido: ");
        }
        return confirmacao;
    }

    private promptLista(): number{
        let index = this.entrada.receberNumero("Escolha o numero do cliente que deseja excluir: ");
        while (index > this.clientes.length - 1){
            index = this.entrada.receberNumero("Escolha um numero valido: ");
        }
        return index;
    }
}