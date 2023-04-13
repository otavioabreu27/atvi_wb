import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import AlteracaoCliente from "../negocio/alteracaoCliente";
import ExclusaoCliente from "../negocio/exclusaoCliente";
import ListagemProdutos from "../negocio/listagemProdutosServicos";
import ExclusaoProduto from "../negocio/exclusaoProdutoServico";
import CadastroProdutoServico from "../negocio/cadastroProdutoServico";
import AlteracaoProdutoServico from "../negocio/alteracaoProdutoServico";
import ingestar from "./ingesta";
import ListagemProdutosServicos from "../negocio/listagemProdutosServicos";

let empresa = new Empresa()
ingestar(empresa)
let execucao = true
console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Painel Cliente`);
    console.log(`2 - Painel Produtos e Servicos`);
    console.log(`3 - Painel de Funcionalidades`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let main_opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (main_opcao) {
        case 1:
            console.log('-- Painel Cliente -- ');
            console.log(`1 - Cadastrar cliente`);
            console.log(`2 - Listar todos os clientes`);
            console.log(`3 - Alterar clientes`);
            console.log(`4 - Excluir cliente`);
            console.log('0 - Voltar ao menu');
            let opcao_painel_cliente = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcao_painel_cliente){
                case 1:
                    let cadastro_cliente = new CadastroCliente(empresa.getClientes)
                    cadastro_cliente.cadastrar()
                    break;
                case 2:
                    let listagem_clientes = new ListagemClientes(empresa.getClientes)
                    listagem_clientes.listar()
                    break;
                case 3:
                    let alterar_cliente = new AlteracaoCliente(empresa.getClientes)
                    alterar_cliente.alterar()
                    break;
                case 4:
                    let excluir_cliente = new ExclusaoCliente(empresa.getClientes)
                    excluir_cliente.excluir()
                    break;
                case 0:
                    break;
            }
            break;
        case 2:
            console.log('-- Painel Produtos e Servicos -- ');
            console.log(`1 - Cadastrar produtos/serviços`);
            console.log('2 - Listar produtos/serviços');
            console.log('3 - Alterar produto/serviço');
            console.log('4 - Excluir produto/serviço');
            console.log('0 - Voltar ao menu');
            let opcao_painel_produtos = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcao_painel_produtos){
                case 1:
                    let cadastro_produto = new CadastroProdutoServico(empresa.getProdutos, empresa.getServicos)
                    cadastro_produto.cadastrar()
                    break;
                case 2:
                    let listagem_produto = new ListagemProdutos(empresa.getProdutos, empresa.getServicos)
                    listagem_produto.listar()
                    break;
                case 3:
                    let alterar_produto = new AlteracaoProdutoServico(empresa.getProdutos, empresa.getServicos)
                    alterar_produto.alterar()
                    break;
                case 4:
                    let excluir_produto = new ExclusaoProduto(empresa.getProdutos, empresa.getServicos)
                    excluir_produto.excluir()
                    break;
                case 0:
                    break;
            }
            break;
        case 3:
            console.log('-- Painel de Funcionalidades --')
            console.log('1 - Listagem dos 10 clientes que mais consumiram (QTD)')
            console.log('2 - Listagem dos clientes por genero')
            console.log('3 - Listagem geral dos produtos ou serviços mais consumidos')
            console.log('0 - Voltar ao menu');
            let opcao_painel_funcionalidades = entrada.receberNumero(`Por favor, escolha uma opção: `)
            switch(opcao_painel_funcionalidades){
                case 1:
                    let listar_cliente_qtd = new ListagemClientes(empresa.getClientes)
                    listar_cliente_qtd.listar_cliente_qtd()
                    break;
                case 2:
                    let listar_cliente_gen = new ListagemClientes(empresa.getClientes)
                    listar_cliente_gen.listar_cliente_gen()
                    break;
                case 3:
                    let listar_produtos_servicos_mais_vendidos = new ListagemProdutosServicos(empresa.getProdutos, empresa.getServicos);
                    listar_produtos_servicos_mais_vendidos.listar_produtos_servicos_mais_vendidos(empresa.getClientes)
                    break;
                case 0:
                    break;
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}