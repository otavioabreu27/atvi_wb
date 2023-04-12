import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";
import Entrada from "../io/entrada";

export default class CadastroProdutoServico extends Cadastro{
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(produtos: Array<Produto>, servicos: Array<Servico>){
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nInício do cadastro do produto/servico`);
        let tipo_cadastro = this.prompt_tipo();
        if (tipo_cadastro == "p"){
            this.cadastrar_produto();
        } else {
            this.cadastrar_servico();
        }
    }
    
    private prompt_tipo(): string {
        let tipo_cadastro = this.entrada.receberTexto("Deseja cadastrar um produto ou serviço [p/s]: ");
        while(tipo_cadastro != "s" && tipo_cadastro != "p"){
            tipo_cadastro = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return tipo_cadastro;
    }

    private prompt_genero(): string {
        let novo_genero = this.entrada.receberTexto('Pra qual genero esse produto/servico e destinado? [m/f]: ');
        while (novo_genero != "m" && novo_genero != "f"){
            novo_genero = this.entrada.receberTexto('Digite um valor valido: ');
        }
        return novo_genero; 
    }

    private cadastrar_produto(): void {
        let nome = this.entrada.receberTexto("Por favor informe o nome do produto: ");
        let novo_valor = this.entrada.receberNumero("Por favor informe o valor: ");
        let novo_genero = this.prompt_genero();
        let produto = new Produto(nome, novo_valor, novo_genero);
        this.produtos.push(produto);
        console.log('Produto cadastrado com sucesso!');
    }

    private cadastrar_servico(): void {
        let nome = this.entrada.receberTexto("Por favor informe o nome do servico: ");
        let novo_valor = this.entrada.receberNumero("Por favor informe o valor: ");
        let novo_genero = this.prompt_genero();
        let servico = new Servico(nome, novo_valor, novo_genero);
        this.servicos.push(servico);
        console.log('Cadastro concluído com sucesso!');
    }
}