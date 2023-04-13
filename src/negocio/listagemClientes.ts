import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
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


    public listar_cliente_qtd(tipo: string): void{
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

            qtd_servicos.sort((a, b) => Number(b.qtd) - Number(a.qtd));
            console.log('-- 10 Clientes que mais consumiram servicos --');
            for (let cont = 0; cont <= 9 ; cont++){
                let qtd_index = qtd_servicos[cont]
                console.log(`- ${this.clientes[Number(qtd_index.index)].nome}:`)
                console.log(`  Servicos: ${qtd_index.qtd}`)
            }
        }
    }


    public listar_cliente_gen(gen: string): void{
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
}