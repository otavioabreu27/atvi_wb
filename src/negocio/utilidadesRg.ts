import Utilidades from "./utilidades";
import RG from "../modelo/rg";

export default class UtilidadesRG extends Utilidades{
    public criaRG(valor: string, strDataEmissao: string): RG{
        let ano = Number(strDataEmissao.substring(6))
        let mes = Number(strDataEmissao.substring(3, 5))
        let dia = Number(strDataEmissao.substring(0,2))
        let data = new Date(ano, mes, dia)
        return new RG(valor, data)
    }

    public cadastrarRgs(): Array<RG>{
        let RGS: Array<RG> = [];
        let rg = this.entrada.receberTexto("Por favor insira o numero do RG: ")
        let strDataEmissao = this.entrada.receberTexto("Digite a data de emissão no formato dd/mm/aaaa: ")
        let RG = this.criaRG(rg, strDataEmissao)
        RGS.push(RG)
        let confirma = this.notifyRgs();
        while (confirma == "s"){
            rg = this.entrada.receberTexto("Por favor insira o numero do RG: ")
            strDataEmissao = this.entrada.receberTexto("Digite a data de emissão no formato dd/mm/aaaa: ")
            RG = this.criaRG(rg, strDataEmissao)
            RGS.push(RG)
            confirma = this.notifyRgs();
        }
        return RGS
    }  

    private notifyRgs(): string{
        let confirma = this.entrada.receberTexto("Que registrar mais RG's? [s/n]: ")
        while (confirma != "s" && confirma != "n"){
            confirma = this.entrada.receberTexto("Digite um valor valido: ")
        }
        return confirma
    }
}