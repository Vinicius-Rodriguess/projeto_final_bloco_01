import { Produto } from "../model/Produto"

export interface ProdutoRepository {
	procurarPorId(id: number): void
	listarTodos(): void
	cadastrar(produto: Produto): void
	atualizar(produto: Produto): void
	verificarProdutoExistente(id: number): Produto | null
	deletar(id: number): void
}