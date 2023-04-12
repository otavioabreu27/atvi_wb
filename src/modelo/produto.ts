export default class Produto {
    public nome!: string
    private valor!: number
    private genero!: string

    constructor(nome: string, valor: number, genero: string){
        this.nome = nome;
        this.valor = valor;
        this.genero = genero;
    }

    public get getValor(): number {
        return this.valor
    }

    public get getGenero(): string{
        return this.genero;
    }
}