import { Produto } from "./Produto"

export class Bolo extends Produto {
    private _cobertura: string
    private _recheio: string

    constructor(id: number, nome: string, tipo: number, preco: number, cobertura: string, recheio: string) {
        super(id, nome, tipo, preco)
		this._cobertura = cobertura
        this._recheio = recheio	
    }

	public get cobertura(): string {
		return this._cobertura
	}

	public get recheio(): string {
		return this._recheio
	}

    public set cobertura(value: string) {
		this._cobertura = value
	}

	public set recheio(value: string) {
		this._recheio = value
	}

    public visualizar(): void {
        super.visualizar()
        console.log("Cobertura: " + this._cobertura)
        console.log("Recheio: R$" + this._recheio)
    }
}