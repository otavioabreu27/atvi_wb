import Listagem from "./listagem";
import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cliente from "../modelo/cliente";

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

    public listar_produtos_servicos_mais_vendidos(clientes: Array<Cliente>): void{       
        let ps = this.prompt_tipo();
        if (ps == "p"){
            this.listar_produtos_mais_vendidos(clientes);
        } else {
            this.listar_servicos_mais_vendidos();
        }
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

    private listar_produtos_mais_vendidos(clientes: Array<Cliente>):void {
        console.log("-- Produtos mais consumidos --")
        interface produto_qtd {
            produto: String,
            qtd: Number
        }
        // Array que guarda o par Produto, QTD
        let produtos_qtd: Array<produto_qtd> = [];

        // Array que guarda os produtos do cliente atual
        let produtos_cliente: Array<Produto> = [];

        // Qtd de produtos que o cliente atual comprou 
        let qtd_produtos: Number = 0;

        this.produtos.forEach((produto)=> {
            clientes.forEach((cliente)=>{
                produtos_cliente = cliente.getProdutosConsumidos;
                qtd_produtos = produtos_cliente.reduce((count, value) => (value == produto ? count + 1 : count), 0)
                produtos_qtd.push({
                    produto: String(produto.getNome),
                    qtd: Number(qtd_produtos)
                });
            });
        });
        
        let produtos_qtd_formatado: {[index: string]: Number} = {};

        produtos_qtd.forEach((produto_atual:produto_qtd) => {
            let chaves_prod_qtd_formatado = Object.keys(produtos_qtd_formatado)
            if (chaves_prod_qtd_formatado.find(element => element == produto_atual.produto) == undefined){
                produtos_qtd_formatado[String(produto_atual.produto)] = produto_atual.qtd
            } else {
                produtos_qtd_formatado[String(produto_atual.produto)] = Number(produtos_qtd_formatado.qtd) + Number(produto_atual.qtd);
            }
        });
        console.log(produtos_qtd_formatado)
    }

    private listar_servicos_mais_vendidos():void{
        
    }

    private prompt_tipo(): string{
        let tipo = this.entrada.receberTexto("Quer a listagem de produtos ou servicos? [p/s]: ");
        while (tipo != "s" && tipo != "p"){
            tipo = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return tipo
    }
}