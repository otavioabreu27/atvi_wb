import Utilidades from "./utilidades";
import CPF from "../modelo/cpf";

export default class UtilidadesCpf extends Utilidades{
    public criaCpf(valor: string, data: string): CPF{
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        return new CPF(valor, dataEmissao);
    }
}