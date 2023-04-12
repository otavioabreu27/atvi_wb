import CPF from "../modelo/cpf";
import Cliente from "../modelo/cliente";
import RG from "../modelo/rg";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Empresa from "../modelo/empresa";
import UtilidadesCpf from "../negocio/utilidadesCpf";
import Telefone from "../modelo/telefone";

var utilCpf = new UtilidadesCpf;

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

var dataRG = [
    new Date(valoresCpf[0]),
    new Date(valoresCpf[1]),
    new Date(valoresCpf[2]),
    new Date(valoresCpf[3]),
    new Date(valoresCpf[4]),
    new Date(valoresCpf[5]),
    new Date(valoresCpf[6])
] 

function sortCPF(){
    
}

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
        let cpf = utilCpf.criaCpf(valoresCpf[indexValorCpf], dataCpf[indexDataCpf])
        let cliente = new Cliente(
            nome[indexNome],
            nomeSocial[indexNomeSocial],
            cpf,
            genero[indexGenero],
            numerosTelefone[indexNumeroTelefone]
        )
        empresa.getClientes.push(cliente)
    }
    console.log("Gerando p")

}