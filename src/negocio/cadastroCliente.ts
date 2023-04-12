import Cliente from "../modelo/cliente";
import Cadastro from "./cadastro";
import UtilidadesTelefone from "./utilidadesTelefone";
import UtilidadesCpf from "./utilidadesCpf";
import UtilidadesRG from "./utilidadesRg";
import Entrada from "../io/entrada";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private utilidades_telefone: UtilidadesTelefone
    private utilidades_cpf: UtilidadesCpf
    private utilidades_rg: UtilidadesRG
    private entrada: Entrada;
    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.utilidades_telefone = new UtilidadesTelefone;
        this.utilidades_cpf = new UtilidadesCpf;
        this.utilidades_rg = new UtilidadesRG;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let genero = this.prompt_genero();
        let numeros_telefone = this.utilidades_telefone.cadastrarNumeros()
        let cpf = this.utilidades_cpf.criaCpf(valor, data);
        let rgs = this.utilidades_rg.cadastrarRgs();
        let telefone = this.utilidades_telefone.criaTelefones(numeros_telefone)
        let cliente = new Cliente(nome, nomeSocial, cpf, genero, rgs, telefone);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    private prompt_genero(): string{
        let novo_genero = this.entrada.receberTexto('Por favor informe o gênero [m/f]: ');
        while (novo_genero != "m" && novo_genero != "f"){
            novo_genero = this.entrada.receberTexto('Digite um valor valido: ');
        }
        return novo_genero;
    }
}