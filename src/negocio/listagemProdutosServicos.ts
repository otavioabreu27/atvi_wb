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
        let tipo = this.prompt_tipo();
        if (tipo == "s"){
            console.log('Listagem dos serviços:')
            this.listar_servicos();
        } else {
            console.log('Listagem dos produtos:')
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

    private listar_servicos(): void{
        this.servicos.forEach((servico)=>{
            console.log(`  - ${servico.getNome}`);
        })
    }

    private listar_produtos(): void{
        this.produtos.forEach((produto)=>{
            console.log(`  - ${produto.getNome}`)
        })
    }

    public listar_produtos_servicos_mais_vendidos(clientes: Array<Cliente>): void {       
        let ps = this.prompt_tipo();
        if (ps == "p"){
            console.log('Listando produtos mais vendidos: ')
            this.listar_produtos_mais_vendidos(clientes);
        } else {
            console.log('Listando serviços mais vendidos: ')
            this.listar_servicos_mais_vendidos(clientes);
        }
    }

    public listar_produto_servico_mais_vendido_genero(clientes: Array<Cliente>): void {
        let ps = this.prompt_tipo();
        let mf = this.prompt_genero();
        if (ps == "p"){
            if (mf == "m"){
                console.log('Listando produtos mais vendidos para o sexo masculino: ')
                
            } else {
                console.log('Listando produtos mais vendidos para o sexo feminino: ')
            }
        } else {
            if (mf == "m"){
                console.log('Listando serviço mais vendidos para o sexo masculino: ')
                this.listar_servicos_mais_vendidos_genero(clientes, mf)
            } else {
                console.log('Listando serviços mais vendidos para o sexo feminino: ')
                this.listar_servicos_mais_vendidos_genero(clientes, mf)
            }
        }
    }

    private listar_servicos_mais_vendidos_genero(clientes: Array<Cliente>, genero: string): void {
        let servicos:{[key: string]: number} = {};
        let todos_servicos_consumidos: Array<string> = [];
        let qtd = 0;

        // Cria um array com todos os servicos consumidos pelo genero escolhido
        clientes.forEach((cliente) => {
            if (cliente.getGenero == genero){
                let servicos_consumidos = cliente.getServicosConsumidos;
                servicos_consumidos.forEach((servico)=>{
                    todos_servicos_consumidos.push(servico.getNome);
                });
            };
        });

        // Cria um objeto com o número de ocorrências no array
        // com todos os servicos
        todos_servicos_consumidos.forEach((servico) => {
            if (!servicos[servico]) {
                servicos[servico] = 1;
            } else {
                qtd = servicos[servico];
                servicos[servico] = qtd + 1;
            };
        });

        // Ordena os servicos em um array
        const servicos_ordenados = Object.entries(servicos).sort(([, a], [, b]) => b - a);
        
        servicos_ordenados.forEach((servico)=>{
            console.log(`  - ${servico[0]}: ${servico[1]}`)
        })
    }

    private listar_servicos_mais_vendidos(clientes: Array<Cliente>):void{
        let servicos:{[key: string]: number} = {};
        let todos_servicos_consumidos: Array<string> = [];
        let qtd = 0;

        // Cria um array com todos os servicos 
        clientes.forEach((cliente) => {
            let servicos_consumidos = cliente.getServicosConsumidos;
            servicos_consumidos.forEach((servico)=>{
                todos_servicos_consumidos.push(servico.getNome)
            })
        })

        // Cria um objeto com o número de ocorrências no array
        // com todos os servicos
        todos_servicos_consumidos.forEach((servico) => {
            if (!servicos[servico]) {
                servicos[servico] = 1;
            } else {
               qtd = servicos[servico];
               servicos[servico] = qtd + 1 
            }
          });
        
        // Ordena os servicos em um array
        const servicos_ordenados = Object.entries(servicos).sort(([, a], [, b]) => b - a);
        
        servicos_ordenados.forEach((servico)=>{
            console.log(`  - ${servico[0]}: ${servico[1]}`)
        })
        
    }

    private listar_produtos_mais_vendidos(clientes: Array<Cliente>):void{
        let produtos:{[key: string]: number} = {};
        let todos_produtos_consumidos: Array<string> = [];
        let qtd = 0;

        // Cria um array com todos os servicos
        clientes.forEach((cliente) => {
            let produtos_consumidos = cliente.getProdutosConsumidos;
            produtos_consumidos.forEach((produto)=>{
                todos_produtos_consumidos.push(produto.getNome)
            })
        })

        // Cria um objeto com o número de ocorrências no array
        // com todos os servicos
        todos_produtos_consumidos.forEach((produto) => {
            if (!produtos[produto]) {
                produtos[produto] = 1;
            } else {
               qtd = produtos[produto];
               produtos[produto] = qtd + 1 
            }
          });
        
        // Ordena os servicos em um array
        const produtos_ordenados = Object.entries(produtos).sort(([, a], [, b]) => b - a);
        
        produtos_ordenados.forEach((produto)=>{
            console.log(`  - ${produto[0]}: ${produto[1]}`)
        })
    }

    private prompt_tipo(): string{
        let tipo = this.entrada.receberTexto("Quer a listagem de produtos ou servicos? [p/s]: ");
        while (tipo != "s" && tipo != "p"){
            tipo = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return tipo
    }

    private prompt_genero(): string{
        let genero = this.entrada.receberTexto("Quer a listagem do genero masculino ou feminino? [m/f]: ");
        while (genero != "m" && genero != "f"){
            genero = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return genero
    }
}