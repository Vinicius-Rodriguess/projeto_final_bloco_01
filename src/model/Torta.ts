import { Produto } from "./Produto"

export class Torta extends Produto {
    private _tipoMassa: string
    private _recheio: string

    constructor(id: number, nome: string, tipo: number, preco: number, tipoMassa: string, recheio: string) {
        super(id, nome, tipo, preco)
        this._tipoMassa = tipoMassa
        this._recheio = recheio	
    }

    public get tipoMassa(): string {
        return this._tipoMassa
    }

    public get recheio(): string {
        return this._recheio
    }

    public set tipoMassa(value: string) {
        this._tipoMassa = value
    }

    public set recheio(value: string) {
        this._recheio = value
    }

    public visualizar(): void {
        super.visualizar()
        console.log("Tipo da Massa: " + this._tipoMassa)
        console.log("Recheio: " + this._recheio)
    }
}