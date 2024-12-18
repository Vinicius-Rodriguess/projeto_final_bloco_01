import { Produto } from "../model/Produto"
import { ProdutoRepository } from "../repository/ProdutoRepository"
import { colors } from "../util/colors"

export class ProdutoController implements ProdutoRepository {
    listaProdutos = new Array<Produto>()
    public id: number = 0

    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id)

        if (buscaProduto != null) {
            buscaProduto.visualizar()
        } else
            console.log(colors.fg.red, "\nA Produto id: " + id
                + " não foi encontrada!", colors.reset)
    }

    listarTodas(): void {
        this.listaProdutos.forEach(produto => produto.visualizar())
    }

    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log("O produto foi cadastrado com sucesso!")
    }

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id)

        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto
            console.log(colors.fg.green, "\nO Produto numero: " + produto.id +
                " foi atualizado com sucesso!", colors.reset)
        } else
            console.log(colors.fg.red, "\nO Produto id: " + produto.id +
                " não foi encontrada!", colors.reset)
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id)
 
        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1)
        	console.log(colors.fg.green,"\nO produto id: " + id + 
                        " foi apagado com sucesso!", colors.reset)
        } else
        console.log(colors.fg.red,"\nO produto id: " + id + 
                    " não foi encontrada!", colors.reset)
    }

    public gerarId(): number {
        return ++this.id
    }

    public buscarNoArray(id: number): Produto | null {

        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto
        }

        return null
    }
}