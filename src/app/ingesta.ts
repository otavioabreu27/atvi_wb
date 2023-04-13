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
    "Ana",
    "Bianca",
    "Carlos",
    "Daniela",
    "Eduardo",
    "Fernanda",
    "Gabriel",
    "Hugo",
    "Isabel",
    "João",
    "Karina",
    "Lucas",
    "Mariana",
    "Natália",
    "Otávio",
    "Patrícia",
    "Quintino",
    "Renata",
    "Simone",
    "Thiago",
    "Ulisses",
    "Valentina",
    "William",
    "Xavier",
    "Yasmin",
    "Zélio",
    "Amanda",
    "Bruno",
    "Cíntia",
    "Davi"
]

var nomeSocial = [
    "Elisa",
    "Fabiana",
    "Gustavo",
    "Helena",
    "Igor",
    "Jéssica",
    "Kátia",
    "Larissa",
    "Márcio",
    "Nádia",
    "Olívia",
    "Pedro",
    "Rafael",
    "Samantha",
    "Talita",
    "Ulisses",
    "Viviane",
    "Wagner",
    "Xuxa",
    "Yuri",
    "Zilda",
    "André",
    "Bárbara",
    "Carmen",
    "Diego",
    "Emanuela",
    "Fábio",
    "Giovana",
    "Heloísa",
    "Iara"
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
    '945.364.181-97', '304.253.933-25',
    '702.221.173-34', '802.085.618-94',
    '751.220.092-61', '791.978.671-26',
    '849.267.860-76', '325.094.958-92',
    '707.735.711-84', '315.561.977-38',
    '572.107.150-67', '331.018.395-74',
    '416.521.210-10', '359.643.902-36',
    '371.732.380-98', '834.986.791-65',
    '002.886.442-54', '810.467.098-87',
    '059.663.837-66', '776.794.662-68',
    '774.062.480-77', '989.197.111-12',
    '649.001.842-93', '019.624.884-70',
    '565.424.912-42', '224.031.260-10',
    '126.245.087-45', '300.316.818-89',
    '513.681.151-12', '532.449.850-26'     
]

var dataCpf = [
    '15/10/1997', '06/04/1910', '13/10/1910',
    '22/09/1952', '27/05/2010', '13/05/2002',
    '19/01/1958', '07/07/1996', '01/07/2011',
    '21/12/1921', '01/12/2019', '06/02/1906',
    '19/07/1925', '22/04/1901', '02/02/2003',
    '21/11/1999', '14/11/1986', '23/07/1968',
    '07/01/1984', '06/02/1937', '22/03/1988',
    '05/11/1934', '28/02/1930', '08/10/1919',
    '22/12/1997', '20/11/2011', '24/06/2006',
    '24/03/2011', '14/08/1916', '27/10/1980'

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
    '64.312.379-25', '70.517.794-41', '87.364.861-68', 
    '45.210.218-06', '23.966.489-48', '28.099.628-60', 
    '17.634.448-16', '17.456.527-99', '49.433.526-36', 
    '47.742.553-66', '42.787.545-43', '26.866.912-90', 
    '52.922.370-46', '50.935.022-81', '48.864.102-68', 
    '51.859.634-98', '62.510.274-21', '86.695.144-01', 
    '74.959.786-39', '79.655.131-41', '41.094.467-53', 
    '84.534.743-39', '34.428.124-46', '39.981.808-98', 
    '94.927.381-10', '10.875.821-49', '28.040.364-00', 
    '55.294.858-58', '10.016.863-08', '20.474.743-03'
]

export default function ingestar(empresa:Empresa){
    console.log("Gerando Clientes")
    console.log("-----------------------------------")
    for(let cont = 0; cont <= 30; cont++){
        let indexNome = Math.floor(Math.random()*30);
        let indexNomeSocial = Math.floor(Math.random()*30);
        let indexGenero = Math.floor(Math.random()*2);
        let indexValorCpf = Math.floor(Math.random()*30);
        let indexDataCpf = Math.floor(Math.random()*30);
        let indexNumeroTelefone = Math.floor(Math.random()*7);
        let indexNumeroRg = Math.floor(Math.random()*30);
        let indexDataRg = Math.floor(Math.random()*30);
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

    let clientes = empresa.getClientes

    clientes.forEach((cliente) =>{
        let qtdProdutos = Math.ceil(Math.random()*10);
        for(let cont=0; cont <= qtdProdutos; cont++){
            let indexProduto = Math.floor(Math.random()*10);
            cliente.getProdutosConsumidos.push(empresa.getProdutos[indexProduto])
        }
    })

    clientes.forEach((cliente) =>{
        let qtdServicos = Math.ceil(Math.random()*10);
        for(let cont=0; cont <= qtdServicos; cont++){
            let indexServico = Math.floor(Math.random()*10);
            cliente.getServicosConsumidos.push(empresa.getServicos[indexServico])
        }
    })
}