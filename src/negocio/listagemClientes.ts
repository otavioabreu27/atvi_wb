import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private entrada: Entrada;
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.entrada = new Entrada;
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
            console.log(`Produtos Consumidos:`);
            cliente.getProdutosConsumidos.forEach((produto) => {
                console.log(`  - ${produto.getNome}`)
            })
            console.log(`Serviços Consumidos:`);
            cliente.getServicosConsumidos.forEach((servico) => {
                console.log(`  - ${servico.getNome}`)
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
        console.log(`  RG:`)
        cliente.getRgs.forEach((rg)=>{
            console.log(`    - ${rg.getValor}`)
        })
        console.log(`  Genero: ${cliente.getGenero}`);
        console.log(`--------------------------------------`);
    }


    public listar_cliente_qtd(): void{
        let tipo = this.prompt_ps();
        if (tipo == "p"){
            interface qtd_index{
                qtd: Number,
                index: Number
            }

            let qtd_produtos: Array<qtd_index> = [];
            let index = 0;
            this.clientes.forEach((cliente)=>{
                qtd_produtos.push(
                    {
                        qtd: Number(cliente.getProdutosConsumidos.length),
                        index: Number(index)
                    }
                )
                index++;
            });

            // Ordena o array com as qtd e index baseado em maior qtd
            qtd_produtos.sort((a, b) => Number(b.qtd) - Number(a.qtd));
            
            console.log('-- 10 Clientes que mais consumiram produtos --');
            for (let cont = 0; cont <= 9 ; cont++){
                let qtd_index = qtd_produtos[cont]
                console.log(`- ${this.clientes[Number(qtd_index.index)].nome}:`)
                console.log(`  Produtos: ${qtd_index.qtd}`)
            }
        } else {
            interface qtd_index{
                qtd: Number,
                index: Number
            }

            let qtd_servicos: Array<qtd_index> = [];
            let index = 0;
            this.clientes.forEach((cliente)=>{
                qtd_servicos.push(
                    {
                        qtd: Number(cliente.getServicosConsumidos.length),
                        index: Number(index)
                    }
                )
                index++;
            });
            
            // Ordena o array com as qtd e index baseado em maior qtd
            qtd_servicos.sort((a, b) => Number(b.qtd) - Number(a.qtd));

            console.log('-- 10 Clientes que mais consumiram servicos --');
            for (let cont = 0; cont <= 9 ; cont++){
                let qtd_index = qtd_servicos[cont]
                console.log(`- ${this.clientes[Number(qtd_index.index)].nome}:`)
                console.log(`  Servicos: ${qtd_index.qtd}`)
            }
        }
    }


    public listar_cliente_gen(): void{
        let gen = this.prompt_mf();
        if (gen == "m"){
            console.log('-- Clientes do genero masculino --');
            this.clientes.forEach((cliente)=>{
                if (cliente.getGenero == "m"){
                    console.log(`- ${cliente.nome}[${cliente.getCpf.getValor}]`)
                }
            });
        } else {
            console.log('-- Clientes do genero feminino --');
            this.clientes.forEach((cliente)=>{
                if (cliente.getGenero == "f"){
                    console.log(`- ${cliente.nome}[${cliente.getCpf.getValor}]`)
                }
            });
        }
    }

    public listar_clientes_menos_consumiram() {
        const ps = this.prompt_ps()
        const cliente_qtd:{[key: string]: number} = {};
        if (ps == "s"){
            console.log('Listando 10 clientes que menos consumiram serviços:')
            this.clientes.forEach((cliente)=>{
                cliente_qtd[cliente.nome] = cliente.getServicosConsumidos.length;
            });

            const clientes_ordenados = Object.entries(cliente_qtd).sort(([,a], [,b]) => a - b);
            for (let cont=0; cont<10; cont++){
                console.log(`- ${clientes_ordenados[cont][0]}: ${clientes_ordenados[cont][1]}`);
            }
        } else {
            console.log('Listando 10 clientes que menos consumiram produtos:')
            this.clientes.forEach((cliente)=>{
                cliente_qtd[cliente.nome] = cliente.getProdutosConsumidos.length;
            })

            const clientes_ordenados = Object.entries(cliente_qtd).sort(([,a], [,b]) => a - b);
            for (let cont=0; cont<10; cont++){
                console.log(`- ${clientes_ordenados[cont][0]}: ${clientes_ordenados[cont][1]}`);
            }
        } 
    }

    public listar_clientes_mais_consumiram_valor() {
        const cliente_valor:{[key: string]: number} = {};
        let valor_serv = 0;
        let valor_produto = 0;
        this.clientes.forEach((cliente)=>{
            valor_serv = 0;
            valor_produto = 0;

            cliente.getProdutosConsumidos.forEach((produto)=>{
                valor_produto+=produto.getValor;
            });

            cliente.getServicosConsumidos.forEach((servico)=>{
                valor_serv+=servico.getValor
            })

            cliente_valor[cliente.nome] = valor_produto + valor_serv; 
        });

        const clientes_ordenados = Object.entries(cliente_valor).sort(([,a], [,b]) => b - a);
        for (let cont=0; cont<5; cont++){
            console.log(`- ${clientes_ordenados[cont][0]}: R$${clientes_ordenados[cont][1]}`);
        }
    }

    private prompt_ps(): string{
        let ps = this.entrada.receberTexto("Deseja listar de produtos ou servicos[p/s]?: ")
        while (ps != "p" && ps != "s"){
            ps = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return ps
    }

    private prompt_mf(): string{
        let mf = this.entrada.receberTexto("Deseja listar os clientes de qual genero[m/f]?: ")
        while (mf != "m" && mf != "f"){
            mf = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return mf
    }
}