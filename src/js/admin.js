
/*
  VINHERIA AGNELLO — CHECKPOINT 02
  Sistema de cadastro e controle de estoque de vinhos

  Recursos:
  - Cadastro sequencial de vinhos
  - Validação dos dados
  - Classificação dos vinhos
  - Alerta de estoque baixo
  - Identificação da safra mais antiga
  - Resumo final dos cadastros

  Não utiliza arrays nem objetos.
*/

// ==========================================
// 1. VARIÁVEIS DE CONTROLE
// ==========================================

let totalCadastros = 0;
let totalEstoqueBaixo = 0;

let nomeMaisAntigo = "";
let safraMaisAntiga = 0;

const anoAtual = new Date().getFullYear();
const limiteCadastros = 20;

// Variáveis individuais para armazenar os vinhos
let nome1 = "", safra1 = 0, quantidade1 = 0;
let nome2 = "", safra2 = 0, quantidade2 = 0;
let nome3 = "", safra3 = 0, quantidade3 = 0;
let nome4 = "", safra4 = 0, quantidade4 = 0;
let nome5 = "", safra5 = 0, quantidade5 = 0;
let nome6 = "", safra6 = 0, quantidade6 = 0;
let nome7 = "", safra7 = 0, quantidade7 = 0;
let nome8 = "", safra8 = 0, quantidade8 = 0;
let nome9 = "", safra9 = 0, quantidade9 = 0;
let nome10 = "", safra10 = 0, quantidade10 = 0;
let nome11 = "", safra11 = 0, quantidade11 = 0;
let nome12 = "", safra12 = 0, quantidade12 = 0;
let nome13 = "", safra13 = 0, quantidade13 = 0;
let nome14 = "", safra14 = 0, quantidade14 = 0;
let nome15 = "", safra15 = 0, quantidade15 = 0;
let nome16 = "", safra16 = 0, quantidade16 = 0;
let nome17 = "", safra17 = 0, quantidade17 = 0;
let nome18 = "", safra18 = 0, quantidade18 = 0;
let nome19 = "", safra19 = 0, quantidade19 = 0;
let nome20 = "", safra20 = 0, quantidade20 = 0;


// ==========================================
// 2. FUNÇÕES DE VALIDAÇÃO
// ==========================================

function validarNome(nome) {
    return nome.trim() !== "";
}

function validarSafra(safra) {
    return (
        safra !== "" &&
        Number.isInteger(Number(safra)) &&
        Number(safra) > 0 &&
        Number(safra) <= anoAtual
    );
}

function validarEstoque(quantidade) {
    return (
        quantidade !== "" &&
        Number.isInteger(Number(quantidade)) &&
        Number(quantidade) >= 0
    );
}


// ==========================================
// 3. CLASSIFICAÇÃO DO VINHO
// ==========================================

function classificarVinho(safra) {
    const idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}


// ==========================================
// 4. VERIFICAÇÃO DO ESTOQUE
// ==========================================

function verificarEstoqueBaixo(quantidade) {
    return quantidade < 5;
}


// ==========================================
// 5. ARMAZENAMENTO DOS DADOS
// ==========================================

function armazenarVinho(numero, nome, safra, quantidade) {
    switch (numero) {
        case 1:
            nome1 = nome;
            safra1 = safra;
            quantidade1 = quantidade;
            break;
        case 2:
            nome2 = nome;
            safra2 = safra;
            quantidade2 = quantidade;
            break;
        case 3:
            nome3 = nome;
            safra3 = safra;
            quantidade3 = quantidade;
            break;
        case 4:
            nome4 = nome;
            safra4 = safra;
            quantidade4 = quantidade;
            break;
        case 5:
            nome5 = nome;
            safra5 = safra;
            quantidade5 = quantidade;
            break;
        case 6:
            nome6 = nome;
            safra6 = safra;
            quantidade6 = quantidade;
            break;
        case 7:
            nome7 = nome;
            safra7 = safra;
            quantidade7 = quantidade;
            break;
        case 8:
            nome8 = nome;
            safra8 = safra;
            quantidade8 = quantidade;
            break;
        case 9:
            nome9 = nome;
            safra9 = safra;
            quantidade9 = quantidade;
            break;
        case 10:
            nome10 = nome;
            safra10 = safra;
            quantidade10 = quantidade;
            break;
        case 11:
            nome11 = nome;
            safra11 = safra;
            quantidade11 = quantidade;
            break;
        case 12:
            nome12 = nome;
            safra12 = safra;
            quantidade12 = quantidade;
            break;
        case 13:
            nome13 = nome;
            safra13 = safra;
            quantidade13 = quantidade;
            break;
        case 14:
            nome14 = nome;
            safra14 = safra;
            quantidade14 = quantidade;
            break;
        case 15:
            nome15 = nome;
            safra15 = safra;
            quantidade15 = quantidade;
            break;
        case 16:
            nome16 = nome;
            safra16 = safra;
            quantidade16 = quantidade;
            break;
        case 17:
            nome17 = nome;
            safra17 = safra;
            quantidade17 = quantidade;
            break;
        case 18:
            nome18 = nome;
            safra18 = safra;
            quantidade18 = quantidade;
            break;
        case 19:
            nome19 = nome;
            safra19 = safra;
            quantidade19 = quantidade;
            break;
        case 20:
            nome20 = nome;
            safra20 = safra;
            quantidade20 = quantidade;
            break;
    }
}


// ==========================================
// 6. EXIBIÇÃO DOS DADOS DO VINHO
// ==========================================

function mostrarDados(numero, nome, safra, quantidade) {
    const classificacao = classificarVinho(safra);

    console.log("------------------------------");
    console.log("VINHO CADASTRADO Nº " + numero);
    console.log("Nome: " + nome);
    console.log("Safra: " + safra);
    console.log("Estoque: " + quantidade + " unidade(s)");
    console.log("Classificação: " + classificacao);

    let mensagem = "Vinho cadastrado com sucesso!\n\n";
    mensagem += "Nome: " + nome + "\n";
    mensagem += "Safra: " + safra + "\n";
    mensagem += "Estoque: " + quantidade + " unidade(s)\n";
    mensagem += "Classificação: " + classificacao;

    if (verificarEstoqueBaixo(quantidade)) {
        totalEstoqueBaixo++;

        mensagem +=
            "\n\nATENÇÃO: Estoque baixo! Existem menos de 5 unidades.";

        console.warn(
            "ALERTA DE ESTOQUE BAIXO: " + nome +
            " possui apenas " + quantidade + " unidade(s)."
        );
    }

    console.log("------------------------------");

    alert(mensagem);
}


// ==========================================
// 7. RESUMO FINAL
// ==========================================

function exibirResumo() {
    let resumo = "RESUMO FINAL DO CADASTRO\n\n";

    resumo += "Total de vinhos cadastrados: " + totalCadastros + "\n";
    resumo += "Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n";

    if (totalCadastros > 0) {
        resumo +=
            "Vinho com a safra mais antiga: " +
            nomeMaisAntigo + "\n";

        resumo += "Safra mais antiga: " + safraMaisAntiga;
    } else {
        resumo += "Nenhum vinho foi cadastrado.";
    }

    console.log("==============================");
    console.log(resumo);
    console.log("==============================");

    alert(resumo);
}


// ==========================================
// 8. CADASTRO SEQUENCIAL
// ==========================================

function cadastrarVinhos() {
    let continuar = true;

    alert(
    "Vinheria Agnello\n\n" +
    "Bem-vindo ao nosso sistema de cadastro de vinhos!\n\n" +
    "Você poderá cadastrar até 20 vinhos."
);

    while (continuar && totalCadastros < limiteCadastros) {
        let nome = "";
        let safra = "";
        let quantidade = "";

        // Validação do nome
        while (!validarNome(nome)) {
            nome = prompt("Digite o nome do vinho:");

            if (nome === null) {
                continuar = false;
                break;
            }

            if (!validarNome(nome)) {
                alert("Nome inválido. Digite o nome do vinho.");
            }
        }

        if (!continuar) {
            break;
        }

        nome = nome.trim();

        // Validação da safra
        while (!validarSafra(safra)) {
            safra = prompt(
                "Digite o ano da safra do vinho " + nome + ":"
            );

            if (safra === null) {
                continuar = false;
                break;
            }

            if (!validarSafra(safra)) {
                alert(
                    "Safra inválida!\n" +
                    "Digite um ano entre 1 e " + anoAtual + "."
                );
            }
        }

        if (!continuar) {
            break;
        }

        safra = Number(safra);

        // Validação da quantidade em estoque
        while (!validarEstoque(quantidade)) {
            quantidade = prompt(
                "Digite a quantidade em estoque do vinho " + nome + ":"
            );

            if (quantidade === null) {
                continuar = false;
                break;
            }

            if (!validarEstoque(quantidade)) {
                alert(
                    "Quantidade inválida!\n" +
                    "Digite um número inteiro igual ou maior que zero."
                );
            }
        }

        if (!continuar) {
            break;
        }

        quantidade = Number(quantidade);

        // Atualiza o número de cadastros
        const numero = totalCadastros + 1;

        armazenarVinho(numero, nome, safra, quantidade);

        totalCadastros++;

        // Identifica manualmente a safra mais antiga
        if (
            totalCadastros === 1 ||
            safra < safraMaisAntiga
        ) {
            safraMaisAntiga = safra;
            nomeMaisAntigo = nome;
        }

        // Exibe os dados e verifica o estoque
        mostrarDados(numero, nome, safra, quantidade);

        // Pergunta se deseja cadastrar outro vinho
        if (totalCadastros < limiteCadastros) {
            const resposta = prompt(
                "Deseja cadastrar outro vinho?\n" +
                "Digite S para sim ou N para não."
            );

            if (
                resposta === null ||
                resposta.trim().toUpperCase() !== "S"
            ) {
                continuar = false;
            }
        } else {
            alert(
                "Limite de " + limiteCadastros +
                " cadastros atingido."
            );
        }
    }

    exibirResumo();
}


// ==========================================
// 9. BOTÃO DE INÍCIO DO CADASTRO
// ==========================================

const botaoCadastro = document.getElementById("iniciarCadastro");

if (botaoCadastro) {
    botaoCadastro.addEventListener("click", function () {
        cadastrarVinhos();
    });
} else {
    console.error(
        'Botão com id "iniciarCadastro" não encontrado no HTML.'
    );
}
