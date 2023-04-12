import CPF from "../modelo/cpf";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Empresa from "../modelo/empresa";
import UtilidadesCpf from "../negocio/utilidadesCpf";
import UtilidadesRG from "../negocio/utilidadesRg";
import Telefone from "../modelo/telefone";

var utilCpf = new UtilidadesCpf;
var utilRg = new UtilidadesRG;

var nome = [
    'Otavio',
    'Alberto',
    'Eliano',
    'Esmilinguido',
    'Rodinaldo',
    'João',
    'Tadeu'
]

var nomeSocial = [
    'Tata',
    'Mimi',
    'Lala',
    'Mama',
    'Lolo',
    'Juju',
    'Papa'
]

var servicos = [
    { servico: "Corte de cabelo masculino", preco: 80.00, genero: "m" },
    { servico: "Corte de cabelo feminino", preco: 120.00, genero: "f" },
    { servico: "Coloração de cabelo", preco: 200.00, genero: "f" },
    { servico: "Tratamentos capilares", preco: 150.00, genero: "f" },
    { servico: "Manicure e pedicure", preco: 100.00, genero: "f" },
    { servico: "Maquiagem", preco: 120.00, genero: "f" },
    { servico: "Depilação masculina", preco: 80.00, genero: "m" },
    { servico: "Depilação feminina", preco: 100.00, genero: "f" },
    { servico: "Design de sobrancelhas", preco: 50.00, genero: "f" },
    { servico: "Limpeza de pele", preco: 120.00, genero: "f" }
];

var produtos = [
    { produto: "Shampoo masculino", preco: 30.00, genero: "m" },
    { produto: "Shampoo feminino", preco: 40.00, genero: "f" },
    { produto: "Condicionador masculino", preco: 30.00, genero: "m" },
    { produto: "Condicionador feminino", preco: 40.00, genero: "f" },
    { produto: "Máscara capilar", preco: 50.00, genero: "f" },
    { produto: "Óleo capilar masculino", preco: 25.00, genero: "m" },
    { produto: "Óleo capilar feminino", preco: 30.00, genero: "f" },
    { produto: "Finalizador para cabelos", preco: 40.00, genero: "f" },
    { produto: "Hidratante corporal masculino", preco: 60.00, genero: "m" },
    { produto: "Hidratante corporal feminino", preco: 70.00, genero: "f" }
]

var genero = [
    'm',
    'f'
]

var valoresCpf = [
    '000.000.000-00',
    '111.111.111-11',
    '123.123.123-11',
    '333.333.111-20',
    '122.123.235-23',
    '444.444.444-00',
    '453.785.123-00'
]

var dataCpf = [
    '27/10/2002',
    '29/09/2002',
    '21/02/1990',
    '12/03/1500',
    '06/10/1240',
    '03/12/2023',
    '08/04/2010'
]

var numerosTelefone = [
    [new Telefone('12','991529385'), new Telefone('12','123445699')],
    [new Telefone('42','123485920'), new Telefone('42','248904392')],
    [new Telefone('55','123940589')],
    [new Telefone('12','219038019')],
    [new Telefone('69','129038091'), new Telefone('77','123459009'), new Telefone('88','123849008')],
    [new Telefone('44','123908109'), new Telefone('24','123981490'), new Telefone('55','120983410')],
    [new Telefone('44','123849022')]
]

var numerosRg = [
    '53.120.000-1',
    '24.123.123-1',
    '12.009.000-8',
    '23.122.889-2',
    '08.456.223-4',
    '45.222.790-0',
    '11.234.666-4'
]

export default function ingestar(empresa:Empresa){
    console.log("Gerando Clientes")
    console.log("-----------------------------------")
    for(let cont = 0; cont <= 10; cont++){
        let indexNome = Math.floor(Math.random()*7);
        let indexNomeSocial = Math.floor(Math.random()*7);
        let indexGenero = Math.floor(Math.random()*2);
        let indexValorCpf = Math.floor(Math.random()*7);
        let indexDataCpf = Math.floor(Math.random()*7);
        let indexNumeroTelefone = Math.floor(Math.random()*7);
        let indexNumeroRg = Math.floor(Math.random()*7);
        let indexDataRg = Math.floor(Math.random()*7);
        let cpf = utilCpf.criaCpf(valoresCpf[indexValorCpf], dataCpf[indexDataCpf]);
        let rgs: Array<RG> = [];
        let rg: RG = utilRg.criaRG(numerosRg[indexNumeroRg], dataCpf[indexDataRg]);
        rgs.push(rg);
        let cliente = new Cliente(
            nome[indexNome],
            nomeSocial[indexNomeSocial],
            cpf,
            genero[indexGenero],
            rgs,
            numerosTelefone[indexNumeroTelefone]
        );
        empresa.getClientes.push(cliente)
    }

    console.log("Ingestando Serviços")
    console.log("-----------------------------------")
    servicos.forEach((servico)=>{
        let servico_lista = new Servico(servico.servico, servico.preco, servico.genero)
        empresa.getServicos.push(servico_lista)
    })

    console.log("Ingestando Produtos")
    console.log("-----------------------------------")
    produtos.forEach((produto)=>{
        let produto_lista = new Produto(produto.produto, produto.preco, produto.genero)
        empresa.getProdutos.push(produto_lista)
    })
}