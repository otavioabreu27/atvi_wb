import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Alteracao from "../negocio/alteracao";
import ListagemClientes from "./listagemClientes";
import UtilidadesTelefone from "./utilidadesTelefone";
import UtilidadesCpf from "./utilidadesCpf";

export default class AlteracaoCliente extends Alteracao {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    private listagem: ListagemClientes;
    private utilidades_telefone: UtilidadesTelefone
    private utilidades_cpf: UtilidadesCpf
    constructor (clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada()
        this.listagem = new ListagemClientes(this.clientes);
        this.utilidades_telefone = new UtilidadesTelefone;
        this.utilidades_cpf = new UtilidadesCpf;
    }
    public alterar(): void {
        console.log('\nInício da alteracao do cliente');
        this.listagem.listar_index()
        let index = Number(this.entrada.receberTexto("Escolha o numero do cliente que deseja alterar: "))
        while (index > this.clientes.length - 1){
            index = Number(this.entrada.receberTexto("Escolha um numero valido: "))
        }
        let cliente_escolhido = this.clientes[index];
        console.log(`Nome atual: ${cliente_escolhido.nome}`)
        let novo_nome = this.entrada.receberTexto('Novo nome: ')
        console.log(`Nome social atual: ${cliente_escolhido.nomeSocial}`)
        let novo_nome_social = this.entrada.receberTexto('Novo nome social: ')
        console.log(`Valor atual: ${cliente_escolhido.getCpf.getValor}`)
        let novo_valor = this.entrada.receberTexto('Por favor informe o novo número do cpf: ');
        console.log(`Data atual: ${cliente_escolhido.getCpf.getDataEmissao}`)
        let nova_data = this.entrada.receberTexto('Por favor informe a nova data de emissão do cpf, no padrão dd/mm/yyyy: ');
        console.log(`Gênero atual: ${cliente_escolhido.getGenero}`);
        let novo_genero = this.entrada.receberTexto('Novo gênero [m/f]: ');
        while (novo_genero != "m" && novo_genero != "f"){
            novo_genero = this.entrada.receberTexto('Digite um valor valido: ');
        }
        console.log('Telefone(s):')
        this.clientes[index].getTelefones.forEach(telefone => {
            console.log(`  - (${telefone.getDdd})${telefone.getNumero}`)
        })
        console.log('Novos Telefones: ')
        let numeros_telefone = this.utilidades_telefone.cadastrarNumeros()
        let novo_cpf = this.utilidades_cpf.criaCpf(novo_valor, nova_data);
        let novo_telefone = this.utilidades_telefone.criaTelefones(numeros_telefone)
        let cliente_alterado = new Cliente(novo_nome, novo_nome_social, novo_cpf, novo_genero, novo_telefone);
        this.clientes[index] = cliente_alterado;
        console.log(`Cliente ${index} alterado!`)
    }
}