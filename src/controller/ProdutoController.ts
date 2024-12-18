import { Produto } from "../model/Produto"
import { ProdutoRepository } from "../repository/ProdutoRepository"
import { colors } from "../util/colors"

export class ProdutoController implements ProdutoRepository {
    private _listaProdutos: Produto[] = []
    private _id: number = 0

    public procurarPorId(id: number): void {
        const produto = this.verificarProdutoExistente(id)

        if (produto) {
            produto.visualizar()
        }
    }

    public listarTodos(): void {
        this._listaProdutos.forEach(produto => produto.visualizar())
    }

    public cadastrar(produto: Produto): void {
        this._listaProdutos.push(produto)
        console.log(`${colors.fg.green}\nO produto foi cadastrado com sucesso!${colors.reset}`)
    }

    public atualizar(novoProduto: Produto): void {
        const produto = this.verificarProdutoExistente(novoProduto.id)

        if (produto) {
            this._listaProdutos[this._listaProdutos.indexOf(produto)] = novoProduto
            console.log(`${colors.fg.green}\nO Produto número: ${novoProduto.id} foi atualizado com sucesso!${colors.reset}`)
        } 
    }

    public deletar(id: number): void {
        const produto = this.verificarProdutoExistente(id)

        if (produto) {
            this._listaProdutos.splice(this._listaProdutos.indexOf(produto), 1)
            console.log(`${colors.fg.green}\nO produto id: ${id} foi apagado com sucesso!${colors.reset}`)
        } 
    }

    public verificarProdutoExistente(id: number): Produto | null {
        const produto = this.buscarNoArray(id)
        if (!produto) {
            console.log(`${colors.fg.red}\nO produto id: ${id} não foi encontrada!${colors.reset}`)
        }
        return produto
    }

    public gerarId(): number {
        return ++this._id
    }

    public buscarNoArray(id: number): Produto | null {
        return this._listaProdutos.find(produto => produto.id === id) || null
    }
}