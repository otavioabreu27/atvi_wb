import Exclusao from "./exclusao";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico"
import Entrada from "../io/entrada";
import ListagemProdutosServicos from "./listagemProdutosServicos";

export default class ExclusaoProduto extends Exclusao {
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    private entrada: Entrada;
    private listagem: ListagemProdutosServicos;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>){
        super();
        this.produtos = produtos;
        this.servicos = servicos;
        this.entrada = new Entrada;
        this.listagem = new ListagemProdutosServicos(this.produtos, this.servicos);
    }


    public excluir(): void {
        console.log(`\nInício da exclusão do produto/servico`);
        let tipo = this.listagem.listar_index();
        if (tipo == "p"){
            this.excluiProduto(tipo);
        } else {
            this.excluiServico(tipo)
        }
        
    }

    private confirmaExclusao(index: number, tipo: string): string {
        if (tipo == "s"){
            this.listagem.listar_produto(index);
            var confirmacao = this.entrada.receberTexto("Tem certeza que quer excluir? [s/n]: ");
            while (confirmacao != "s" && confirmacao != "n"){
                confirmacao = this.entrada.receberTexto("Insira um valor valido: ");
            }
        } else {
            this.listagem.listar_servico(index);
            var confirmacao = this.entrada.receberTexto("Tem certeza que quer excluir? [s/n]: ");
            while (confirmacao != "s" && confirmacao != "n"){
                confirmacao = this.entrada.receberTexto("Insira um valor valido: ");
            }
        }
        return confirmacao;
    }

    private excluiProduto(tipo: string): void{
        let index = this.entrada.receberNumero("Escolha o numero do produto que deseja excluir: ");
            while (index > this.produtos.length - 1){
                index = this.entrada.receberNumero("Escolha um número valido: ");
            }
            let confirma = this.confirmaExclusao(index, tipo);
            if (confirma == "s") {
                this.produtos.splice(index, 1);
            } else {
                console.log("Operacao abortada.");
            }
    }

    private excluiServico(tipo: string): void{
        let index = this.entrada.receberNumero("Escolha o numero do servico que deseja excluir: ");
            while (index > this.servicos.length - 1){
                index = this.entrada.receberNumero("Escolha um número valido: ");
            }
            let confirma = this.confirmaExclusao(index, tipo);
            if (confirma == "s") {
                this.servicos.splice(index, 1);
            } else {
                console.log("Operacao abortada.");
            }
    }
}