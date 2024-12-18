import readlinesync = require("readline-sync")
import { colors } from "./src/util/colors"
import { ProdutoController } from "./src/controller/ProdutoController"
import { Bolo } from "./src/model/Bolo"
import { Torta } from "./src/model/Torta"

const produtosController = new ProdutoController()

const main = ():void => {

    while (true) {
        exibirMenu()

        const operacoes: { [key: number]: () => void } = {
            1: criarProduto,
            2: listarProdutos,
            3: consultarProduto,
            4: atualizarProduto,
            5: apagarProduto,
            6: sair
        }

        const opcao = readlinesync.questionInt("Entre com a opcao desejada: ")

        try {
            operacoes[opcao]()

        } catch(e) {
            console.log(colors.fg.whitestrong,"\nOpção Inválida!\n", colors.reset)
            keyPress()
        }
    }

}

const exibirMenu = (): void => {
    console.log(" ")
    console.log(`${colors.bg.blackbright}${colors.fg.black}                                                             ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                Doce Encanto - Confeitaria                   ${colors.reset}`)
    console.log(`${colors.bg.blackbright}                                                             ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}   1 - Criar Produto                                         ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}   2 - Listar todos os Produtos                              ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}   3 - Buscar Produto por ID                                 ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}   4 - Atualizar Dados do Produto                            ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}   5 - Apagar Produto                                        ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}   6 - Sair                                                  ${colors.reset}`)
    console.log(`${colors.bg.blackbright}                                                             ${colors.reset}`)
}

const criarProduto = (): void => {
    console.log(colors.fg.whitestrong, "\nCriar Produto\n", colors.reset)
    const tipoProduto = ["Bolo", "Torta"]
    const tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1
    const nome = readlinesync.question("Digite o Nome do Produto: ")
    const preco = readlinesync.questionFloat("Digite o Preco do Produto: ")
    const recheio = readlinesync.question("Digite o Recheio do Produto: ")

    switch (tipo) {
        case 1:
            const cobertura = readlinesync.question("Digite a Cobertura do Produto: ")
            produtosController.cadastrar(new Bolo(produtosController.gerarId(), nome, tipo, preco, cobertura, recheio))
            break
        case 2:
            const tipoMassa = readlinesync.question("Digite o Tipo da Massa do Produto: ")
            produtosController.cadastrar(new Torta(produtosController.gerarId(), nome, tipo, preco, tipoMassa, recheio))
            break
    }

    keyPress()
}

const listarProdutos = (): void => {
    console.log(colors.fg.whitestrong, "\nListar todos os Produtos\n", colors.reset)
    produtosController.listarTodos()
    keyPress()
}

const consultarProduto = (): void => {
    console.log(colors.fg.whitestrong, "\nConsultar dados do Produto - Por ID\n", colors.reset)

    const id = readlinesync.questionInt("Digite o id: ")
    produtosController.procurarPorId(id)

    keyPress()
}

const atualizarProduto = (): void => {
    console.log(colors.fg.whitestrong, "\nAtualizar dados do Produto\n", colors.reset)

    const id = readlinesync.questionInt("Digite o Id do Produto: ")
    const produto = produtosController.verificarProdutoExistente(id)

    if (!produto) return

    const tipo = produto.tipo
    const nome = readlinesync.question("Digite o Nome do Produto: ")
    const preco = readlinesync.questionFloat("Digite o preco: ")
    const recheio = readlinesync.question("Digite o Recheio do Produto: ")

    switch (tipo) {
        case 1:
            const cobertura = readlinesync.question("Digite a Cobertura do Produto: ")
            produtosController.atualizar(new Bolo(id, nome, tipo, preco, cobertura, recheio))
            break
        case 2:
            const tipoMassa = readlinesync.question("Digite o Tipo da Massa do Produto: ")
            produtosController.atualizar(new Torta(id, nome, tipo, preco, tipoMassa, recheio))
            break
    }

    keyPress()
}

const apagarProduto = (): void => {
    console.log(colors.fg.whitestrong, "\nApagar um Produto\n", colors.reset)

    const id = readlinesync.questionInt("Digite o id: ")
    produtosController.deletar(id)

    keyPress()
}

const sair = (): void => {
    sobre()
    console.log(colors.reset, "")
    process.exit(0)
}

const sobre = (): void => {
    console.log(`${colors.bg.blackbright}                                                                                      ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                Doce Encanto - Encantado com Doces                                    ${colors.reset}`)
    console.log(`${colors.bg.blackbright}                                                                                      ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                Projeto Desenvolvido por: Vinicius Rodrigues                          ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                Generation Brasil - generation@generation.org                         ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                https://github.com/Vinicius-Rodriguess/conta_bancaria                 ${colors.reset}`)
    console.log(`${colors.bg.blackbright}                                                                                      ${colors.reset}`)
}

const keyPress = (): void => {
    console.log(colors.reset, "")
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt()
}

main()