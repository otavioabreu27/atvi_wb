import Listagem from "./listagem";
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";

export default class ListagemProdutosServicos extends Listagem{
    private entrada: Entrada;
    private produtos: Array<Produto>;
    private servicos: Array<Servico>;
    constructor(produtos: Array<Produto>, servicos: Array<Servico>){
        super();
        this.entrada = new Entrada;
        this.produtos = produtos;
        this.servicos = servicos;
    }

    public listar(): void {
        console.log(`\nLista de todos os produtos: `);
        let tipo = this.prompt_tipo();
        if (tipo == "s"){
            this.listar_servicos();
        } else {
            this.listar_produtos();
        }
        
    }

    public listar_index(): string{
        let index: number = 0;
        let tipo = this.prompt_tipo();
        if (tipo == "p"){
            this.produtos.forEach(produto => {
                console.log(`${index}: `);
                console.log(`  ${produto.getNome}`)
                console.log(`  Valor: R$${produto.getValor}`)
                console.log(`  Genero destinado: ${produto.getGenero}`)
                console.log(`--------------------------------------`);
                index++;
            });    
        } else {
            this.servicos.forEach(servico => {
                console.log(`${index}: `);
                console.log(`  ${servico.getNome}`)
                console.log(`  Valor: R$${servico.getValor}`)
                console.log(`  Genero destinado: ${servico.getGenero}`)
                console.log(`--------------------------------------`);
                index++;
            });  
        }
        return tipo;
    }

    public listar_produto(index: number): void{
        let produto = this.produtos[index]
        console.log(`${index}: `)
        console.log(`  ${produto.getNome}`)
        console.log(`  Valor: R$${produto.getValor}`)
        console.log(`  Genero destinado: ${produto.getGenero}`)
        console.log(`--------------------------------------`);
    }

    public listar_servico(index: number): void{
        let servico = this.servicos[index]
        console.log(`${index}: `)
        console.log(`  ${servico.getNome}`)
        console.log(`  Valor: R$${servico.getValor}`)
        console.log(`  Genero destinado: ${servico.getGenero}`)
        console.log(`--------------------------------------`);
    }

    private listar_produtos():void{
       this.produtos.forEach(produto => {
            console.log(`${produto.getNome}`)
            console.log(`Valor: R$${produto.getValor}`)
            console.log(`Genero destinado: ${produto.getGenero}`)
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }

    private listar_servicos():void{
        this.servicos.forEach(servico => {
            console.log(`${servico.getNome}`)
            console.log(`Valor: R$${servico.getValor}`)
            console.log(`Genero destinado: ${servico.getGenero}`)
            console.log(`--------------------------------------`);
        })
        console.log(`\n`);
    }

    private prompt_tipo(): string{
        let tipo = this.entrada.receberTexto("Quer a listagem de produtos ou servicos? [p/s]: ");
        while (tipo != "s" && tipo != "p"){
            tipo = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return tipo
    }
}