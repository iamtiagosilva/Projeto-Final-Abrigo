const abrigosCadastrados = []

function cadastrarAbrigo(objeto) {
        const nomeAbrigo = prompt("Digite o nome do abrigo:")
        const telefoneAbrigo = prompt("Digite o telefone para contato:")
        const enderecoAbrigo = prompt("Digite o endereço do abrigo:")
        const lotacaoAbrigo = prompt("Digite a lotação máxima do abrigo:")
        const cidadeAbrigo = prompt("Digite a cidade do abrigo:")

        const infosAbrigo = {
            nome: nomeAbrigo,
            telefone: telefoneAbrigo,
            endereco: enderecoAbrigo,
            lotacao: lotacaoAbrigo,
            cidade: cidadeAbrigo

        }

        abrigosCadastrados.push(infosAbrigo)
        console.log("Abrigo cadastrado com sucesso.");

    }

function listarAbrigos() {
    console.log("--------------------");
    console.log("LISTAGEM DE ABRIGOS:");
    console.log("--------------------");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
    console.log("---------------------------------------------------------------------------------------------------------");

    for (let i = 0; i < abrigosCadastrados.length; i++){
        let abrigo = abrigosCadastrados[i];
        let codigo = (i + 1);
        let nome = abrigo.nome;
        let endereco = abrigo.endereco;
        let telefone = abrigo.telefone;
        let lotacao = abrigo.lotacao;
        let cidade = abrigo.cidade;

        console.log(`${codigo} | ${nome} | ${endereco} | ${telefone} | ${lotacao} | ${cidade}`);
    }
    console.log("---------------------------------------------------------------------------------------------------------")
}

function procurarAbrigo() {
    let cidade = prompt("Digite a cidade escolhida:")
    let cidadeEncontrada = false //começa como false mas se encontrar uma cidade se transforma em true
    console.log("--------------------");
    console.log("LISTAGEM DE ABRIGOS:");
    console.log("--------------------");
    console.log("CÓDIGO |         NOME         |              ENDEREÇO              |   TELEFONE   |  CAPACIDADE | CIDADE");
    console.log("---------------------------------------------------------------------------------------------------------");

    for (let i = 0; i < abrigosCadastrados.length; i++){
        let abrigo = abrigosCadastrados[i]
        if (abrigo.cidade.toLowerCase() === cidade.toLowerCase()) {
            let codigo = (i + 1) + (i + 1);
            let nome = abrigo.nome;
            let endereco = abrigo.endereco;
            let telefone = abrigo.telefone;
            let lotacao = abrigo.lotacao;
            let cidade = abrigo.cidade;

            console.log(`${codigo} | ${nome} | ${endereco} | ${telefone} | ${lotacao} | ${cidade}`);

            cidadeEncontrada = true;
        }

        }
        if (!cidadeEncontrada){

            console.log("Não existem abrigos cadastrados nesta cidade.");
        }
    }


function exibirMenu() {
    let menu;

    do {
      console.log("===== ABRIGOS TEMPORÁRIOS =====");
      console.log("1. Cadastrar abrigo");
      console.log("2. Listar abrigos");
      console.log("3. Procurar abrigo");
      console.log("4. Sair");
      menu = prompt("Escolha uma opção:");

      switch (menu) {
        case "1":
          cadastrarAbrigo();
          break;
        case "2":
          listarAbrigos();
          break;
        case "3":
          procurarAbrigo();
          break;
        case "4":
          console.log("Programa encerrado.");
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
          break;
      }
    } while (menu !== "4");
  }

  exibirMenu()