import readlinesync = require("readline-sync")
import { colors } from "./src/util/colors"

export function main() {
    let opcao: number

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

                keyPress()
                break
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset)

                keyPress()
                break
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados doProduto - por ID\n\n", colors.reset)

                keyPress()
                break
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset)

                keyPress()
                break
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um Produto\n\n", colors.reset)

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