import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Alteracao from "./alteracao";
import ListagemProdutos from "./listagemProdutosServicos";

export default class AlteracaoProdutoServico extends Alteracao{
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;
    private listagem: ListagemProdutos;
    constructor(produtos: Array<Produto>, servicos: Array<Servico>){
        super();
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada();
        this.listagem = new ListagemProdutos(this.produtos, this.servicos);
    }
    public alterar(): void {
        console.log('\nInício da alteracao do produto');
        this.listagem.listar_index();
        let index = Number(this.entrada.receberTexto("Escolha o numero do cliente que deseja alterar: "))
        while (index > this.produtos.length - 1){
            index = Number(this.entrada.receberTexto("Escolha um numero valido: "))
        }
        let produto_escolhido = this.produtos[index];
        console.log(`Nome do produto atual: ${produto_escolhido.getNome}`);
        let novo_nome = this.entrada.receberTexto('Novo nome: ');
        console.log(`Valor atual: R$${produto_escolhido.getValor}`);
        let novo_valor = this.entrada.receberNumero('Novo valor: ');
        console.log(`Gênero destinado atual: ${produto_escolhido.getGenero}`);
        let novo_genero = this.entrada.receberTexto('Novo gênero [m/f]: ');
        while (novo_genero != "m" && novo_genero != "f"){
            novo_genero = this.entrada.receberTexto('Digite um valor valido: ');
        }
        let novo_produto = new Produto(novo_nome, novo_valor, novo_genero)
        this.produtos[index] = novo_produto
        console.log('Produto alterado.')
    }
}     