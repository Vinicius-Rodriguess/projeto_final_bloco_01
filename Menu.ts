import readlinesync = require("readline-sync")
import { colors } from "./src/util/colors"
import { ProdutoController } from "./src/controller/ProdutoController"
import { Bolo } from "./src/model/Bolo"
import { Torta } from "./src/model/Torta"

export function main() {
    let opcao, tipo, preco, id: number
    let nome, cobertura, recheio, tipoMassa: string
    const tipoProduto = ["Bolo", "Torta"]
    const produtos = new ProdutoController()

    while (true) {
        console.log(`${colors.bg.blackbright}${colors.fg.black}                                                             ${colors.reset}`)
        console.log(`${colors.bg.white}${colors.fg.black}                Doce Encanto - Confeitaria                   ${colors.reset}`)
        console.log(`${colors.bg.blackbright}                                                             ${colors.reset}`)
        console.log(`${colors.bg.white}${colors.fg.black}   1 - Criar Produto                                         ${colors.reset}`)
        console.log(`${colors.bg.white}${colors.fg.black}   2 - Listar todas os Produtos                              ${colors.reset}`)
        console.log(`${colors.bg.white}${colors.fg.black}   3 - Buscar Produto por ID                                 ${colors.reset}`)
        console.log(`${colors.bg.white}${colors.fg.black}   4 - Atualizar Dados do Produto                            ${colors.reset}`)
        console.log(`${colors.bg.white}${colors.fg.black}   5 - Apagar Produto                                        ${colors.reset}`)
        console.log(`${colors.bg.white}${colors.fg.black}   6 - Sair                                                  ${colors.reset}`)
        console.log(`${colors.bg.blackbright}                                                             ${colors.reset}`)

        console.log("Entre com a opção desejada: ")
        opcao = readlinesync.questionInt("")

        if (opcao == 6) {
            sobre()
            console.log(colors.reset, "")
            process.exit(0)
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar Produto\n\n", colors.reset)

                nome = readlinesync.question("Digite o Nome do Produto: ")
                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1
                preco = readlinesync.questionFloat("Digite o preco: ")
                recheio = readlinesync.question("Digite o Recheio do Produto: ")

                switch (tipo) {
                    case 1:
                        cobertura = readlinesync.question("Digite a Cobertura do Produto: ")
                        produtos.cadastrar(new Bolo(produtos.gerarId(), nome, tipo, preco, cobertura, recheio))
                        break
                    case 2:
                        tipoMassa = readlinesync.question("Digite o Tipo da Massa do Produto: ")
                        produtos.cadastrar(new Torta(produtos.gerarId(), nome, tipo, preco, tipoMassa, recheio))
                        break
                }

                keyPress()
                break
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset)

                produtos.listarTodas()

                keyPress()
                break
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do Produto - Por ID\n\n", colors.reset)

                id = readlinesync.questionInt("Digite o id: ")
                produtos.procurarPorId(id)

                keyPress()
                break
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset)

                id = readlinesync.questionInt("Digite o Id do Produto: ")
                let produto = produtos.buscarNoArray(id)

                if (produto !== null) {
                    nome = readlinesync.question("Digite o Nome do Produto: ")
                    tipo = produto.tipo
                    preco = readlinesync.questionFloat("Digite o preco: ")
                    recheio = readlinesync.question("Digite o Recheio do Produto: ")

                    switch (tipo) {
                        case 1:
                            cobertura = readlinesync.question("Digite a Cobertura do Produto: ")
                            produtos.atualizar(new Bolo(id, nome, tipo, preco, cobertura, recheio))
                            break
                        case 2:
                            tipoMassa = readlinesync.question("Digite o Tipo da Massa do Produto: ")
                            produtos.atualizar(new Torta(id, nome, tipo, preco, tipoMassa, recheio))
                            break
                    }

                } else
                    console.log("Produto não Encontrado!")

                keyPress()
                break
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset)

                    id = readlinesync.questionInt("Digite o id: ")
                    produtos.deletar(id)    

                keyPress()
                break
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset)

                keyPress()
                break
        }
    }

}

function sobre(): void {
    console.log(`${colors.bg.blackbright}                                                                                      ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                Doce Encanto - Encantado com Doces                                    ${colors.reset}`)
    console.log(`${colors.bg.blackbright}                                                                                      ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                Projeto Desenvolvido por: Vinicius Rodrigues                          ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                Generation Brasil - generation@generation.org                         ${colors.reset}`)
    console.log(`${colors.bg.white}${colors.fg.black}                https://github.com/Vinicius-Rodriguess/conta_bancaria                 ${colors.reset}`)
    console.log(`${colors.bg.blackbright}                                                                                      ${colors.reset}`)
}

function keyPress(): void {
    console.log(colors.reset, "")
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt()
}

main()