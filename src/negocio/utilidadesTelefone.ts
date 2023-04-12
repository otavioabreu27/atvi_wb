import Utilidades from "./utilidades";
import Telefone from "../modelo/telefone";

export default class UtilidadesTelefone extends Utilidades{
    public criaTelefones(numeros_telefone: Array<string>): Array<Telefone>{
        let telefones: Array<Telefone> = [];
        let ddd: string = "";
        let numero: string = "";
        numeros_telefone.forEach(num => {
            ddd = num.substring(1,3)
            numero = num.substring(4,)
            let telefone = new Telefone(ddd, numero)
            telefones.push(telefone)
        })
        return telefones;
    }

    public cadastrarNumeros(): Array<string>{
        let numeros_telefone: Array<string> = []
        let num_telefone = this.entrada.receberTexto(`Por favor informe o telefone no formato (xx)yyyyyyyyy: `);
        numeros_telefone.push(num_telefone);
        let confirma = this.notifyNumeros();
        while (confirma == "s"){
            num_telefone = this.entrada.receberTexto(`Por favor informe o telefone no formato (xx)yyyyyyyyy: `);
            numeros_telefone.push(num_telefone);
            confirma = this.notifyNumeros();
        }
        return numeros_telefone
    }

    private notifyNumeros(): string{
        let confirma = this.entrada.receberTexto(`Quer registrar mais numeros? [s/n]: `)
        while (confirma != "s" && confirma != "n"){
            confirma = this.entrada.receberTexto(`Digite um valor valido: `)
        }
        return confirma
    }
}