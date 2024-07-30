const readline = require('readline-sync'); // Importa o módulo readline-sync para ler entradas do usuário

// Arrays para armazenar as organizações, comunidades e projetos
let organizacoes = [];
let comunidades = [];
let projetos = [];

// Variáveis para armazenar os IDs únicos
let orgId = 1;
let comId = 1;
let projId = 1;

let opcao = 0; // Variável para armazenar a opção escolhida pelo usuário

// Loop principal que continua até o usuário escolher a opção 11 (Sair)
while (opcao !== 11) {
    // Exibe o menu de opções
    console.log('****CONSUMO SUSTENTÁVEL NAS COMUNIDADES****');
    console.log('=== SISTEMA DE CADASTRO ===');
    console.log('1 - Cadastrar Organização');
    console.log('2 - Listar Organização');
    console.log('3 - Cadastrar nova comunidade');
    console.log('4 - Listar comunidades');
    console.log('5 - Alterar comunidade');
    console.log('6 - Excluir comunidade');
    console.log('7 - Cadastrar novo projeto');
    console.log('8 - Listar projetos');
    console.log('9 - Alterar projeto');
    console.log('10 - Excluir projeto');
    console.log('11 - Sair do sistema');

    // Lê a opção escolhida pelo usuário
    opcao = readline.questionInt('Escolha uma opcao: ');

    // Verifica a opção escolhida e executa a ação correspondente
    switch (opcao) {
        case 1:
            // Função para cadastrar uma nova organização
            function cadastrarOrganizacao() {
                console.log('=== CADASTRO DA ORGANIZAÇÃO ===');
                let nome = readline.question('Digite o nome da organizacao: '); // Lê o nome da organização
                let objetivo = readline.question('Digite o objetivo da organizacao: '); // Lê o objetivo da organização
                let localizacao = readline.question('Digite a localizacao da organizacao: '); // Lê a localização da organização
                organizacoes.push({ id: orgId++, nome, objetivo, localizacao }); // Cria um novo objeto de organização com um ID único, nome, objetivo e localização fornecidos pelo usuário e o adiciona ao array organizacoes. O id é incrementado automaticamente para cada nova organização.

                console.log(`Organizacao '${nome}' cadastrada com sucesso!`);
            }
            cadastrarOrganizacao(); // Chama a função para cadastrar a organização
            break; // Interrompe a execução do bloco case atual e previne que o código continue para os próximos casos.

        case 2:
            // Função para listar todas as organizações
            function listarOrganizacoes() {
                console.log('=== LISTA DE ORGANIZAÇÕES ===');
                if (organizacoes.length === 0) { // Verifica se não há organizações cadastradas (.length é uma propriedade do array que retorna o número de elementos presentes no array.)
                    console.log('Não há organizacoes cadastradas.');
                } else {
                    // Exibe cada organização com seu índice, nome, objetivo e localização
                    organizacoes.forEach((org, index) => {
                        // .forEach Vai percorrer cada elemento do array organizacoes
                        // org é o nome dado ao parâmetro que contém o objeto de organização atual sendo processado no array.
                        console.log(`${index + 1} - Nome: ${org.nome}, Objetivo: ${org.objetivo}, Localizacao: ${org.localizacao}`);
                        // Imprime o índice (começando de 1) e os detalhes da organização (nome, objetivo, localização)
                    });
                }
            }
            listarOrganizacoes(); // Chama a função para listar as organizações
            break;

        case 3:
            // Função para cadastrar uma nova comunidade
            function cadastrarNovaComunidade() {
                console.log('=== CADASTRAR NOVA COMUNIDADE ===');
                let nome = readline.question('Digite o nome da Comunidade: '); // Lê o nome da comunidade
                let local = readline.question('Digite o local da comunidade: '); // Lê o local da comunidade
                let lider = readline.question('Digite o nome do lider da comunidade: '); // Lê o nome do líder da comunidade
                comunidades.push({ id: comId++, nome, local, lider }); // Adiciona a comunidade ao array com um ID único. Cria um novo objeto de Comunidade com um ID único, nome, local e líder fornecidos pelo usuário e o adiciona ao array comunidades. O id é incrementado automaticamente para cada nova comunidade.
                console.log(`Comunidade '${nome}' cadastrada com sucesso!`);
            }
            cadastrarNovaComunidade(); // Chama a função para cadastrar a comunidade
            break;

        case 4:
            // Função para listar todas as comunidades
            function listarComunidades() {
                console.log('=== LISTA DE COMUNIDADES ===');
                if (comunidades.length === 0) { // Verifica se não há comunidades cadastradas
                    console.log('Não há comunidades cadastradas.');
                } else {
                    // Exibe cada comunidade com seu índice, nome, local e líder
                    comunidades.forEach((com, index) => {
                        console.log(`${index + 1} - Nome: ${com.nome}, Local: ${com.local}, Líder: ${com.lider}`);
                    });
                }
            }
            listarComunidades(); // Chama a função para listar as comunidades
            break;

        case 5:
            // Função para alterar uma comunidade
            function alterarComunidades() {
                listarComunidades(); // Chama e mostra a lista antes de alterar
                let id = readline.questionInt('Digite o ID da comunidade que deseja alterar: ') - 1; // Lê o ID da comunidade a ser alterada
                if (id >= 0 && id < comunidades.length) { // Verifica se o ID é válido
                    let nome = readline.question('Digite o novo nome da comunidade: '); // Lê o novo nome da comunidade
                    let local = readline.question('Digite o novo local da comunidade: '); // Lê o novo local da comunidade
                    let lider = readline.question('Digite o novo nome do lider da comunidade: '); // Lê o novo nome do líder da comunidade
                    comunidades[id] = { id: id + 1, nome, local, lider }; // Atualiza a comunidade no array
                    console.log(`Comunidade '${nome}' alterada com sucesso!`);
                } else {
                    console.log('ID inválido.');
                }
            }
            alterarComunidades(); // Chama a função para alterar a comunidade
            break;

        case 6:
            // Função para excluir uma comunidade
            function excluirComunidade() {
                listarComunidades(); // Mostra a lista antes de excluir
                let id = readline.questionInt('Digite o ID da comunidade que deseja excluir: ') - 1; // Lê o ID da comunidade a ser excluída
                if (id >= 0 && id < comunidades.length) { // Verifica se o ID fornecido é válido
                    // Checa se o ID está dentro do intervalo válido do array 'comunidades'
                    comunidades.splice(id, 1); // Remove a comunidade com o índice especificado (id) do array
                    // O método splice remove o item do array na posição 'id' e '1' indica que apenas um item deve ser removido
                    console.log('Comunidade excluída com sucesso!'); // Mensagem de confirmação após a exclusão
                } else {
                    console.log('ID inválido.'); // Mensagem de erro se o ID fornecido não for válido
                }
            }
            excluirComunidade(); // Chama a função para excluir a comunidade
            break;

        case 7:
            // Função para cadastrar um novo projeto
            function cadastrarProjeto() {
                console.log('=== CADASTRAR NOVO PROJETO ===');
                let nome = readline.question('Digite o nome do projeto: '); // Lê o nome do projeto
                let objetivo = readline.question('Digite o objetivo do projeto: '); // Lê o objetivo do projeto
                listarComunidades(); // Lista as comunidades disponíveis
                let comunidadeId = readline.questionInt('Digite o ID da comunidade associada: ') - 1; // Lê o ID da comunidade associada
                if (comunidadeId >= 0 && comunidadeId < comunidades.length) { 
                    // Verifica se o ID da comunidade fornecido é válido
                    // 'comunidadeId >= 0' garante que o ID não seja negativo
                    // 'comunidadeId < comunidades.length' garante que o ID não exceda o número total de comunidades no array
                    projetos.push({ id: projId++, nome, objetivo, comunidadeId }); // Adiciona o projeto ao array com um ID único
                    console.log(`Projeto '${nome}' cadastrado com sucesso!`);
                } else {
                    console.log('ID da comunidade inválido.');
                }
            }
            cadastrarProjeto(); // Chama a função para cadastrar o projeto
            break;

        case 8:
            // Função para listar todos os projetos
            function listarProjetos() {
                console.log('=== LISTA DE PROJETOS ===');
                if (projetos.length === 0) { // Verifica se não há projetos cadastrados
                    console.log('Não há projetos cadastrados.');
                } else {
                    // Exibe cada projeto com seu índice, nome, objetivo e comunidade associada
                    projetos.forEach((proj, index) => {
                        let comunidade = comunidades[proj.comunidadeId].nome;
                        console.log(`${index + 1} - Nome: ${proj.nome}, Objetivo: ${proj.objetivo}, Comunidade: ${comunidade}`);
                    });
                }
            }
            listarProjetos(); // Chama a função para listar os projetos
            break;

        case 9:
            // Função para alterar um projeto
            function alterarProjetos() {
                listarProjetos(); // Lista os projetos disponíveis
                let id = readline.questionInt('Digite o ID do projeto que deseja alterar: ') - 1; // Lê o ID do projeto a ser alterado
                if (id >= 0 && id < projetos.length) { // Verifica se o ID é válido
                    let nome = readline.question('Digite o novo nome do projeto: '); // Lê o novo nome do projeto
                    let objetivo = readline.question('Digite o novo objetivo do projeto: '); // Lê o novo objetivo do projeto
                    listarComunidades(); // Lista as comunidades disponíveis
                    let comunidadeId = readline.questionInt('Digite o novo ID da comunidade associada: ') - 1; // Lê o novo ID da comunidade associada
                    if (comunidadeId >= 0 && comunidadeId < comunidades.length) { // Verifica se o ID é válido
                        projetos[id] = { id: id + 1, nome, objetivo, comunidadeId }; // Atualiza o projeto no array
                        console.log(`Projeto '${nome}' alterado com sucesso!`);
                    } else {
                        console.log('ID da comunidade inválido.');
                    }
                } else {
                    console.log('ID inválido.');
                }
            }
            alterarProjetos(); // Chama a função para alterar o projeto
            break;

        case 10:
            // Função para excluir um projeto
            function excluirProjetos() {
                listarProjetos(); // Lista os projetos disponíveis
                let id = readline.questionInt('Digite o ID do projeto que deseja excluir: ') - 1; // Lê o ID do projeto a ser excluído
                if (id >= 0 && id < projetos.length) { // Verifica se o ID é válido
                    projetos.splice(id, 1); // Remove o projeto do array
                    console.log('Projeto excluído com sucesso!');
                } else {
                    console.log('ID inválido.');
                }
            }
            excluirProjetos(); // Chama a função para excluir o projeto
            break;

        case 11:
            console.log('Saindo do sistema...'); // Mensagem ao sair do sistema
            break;

        default:
            console.log('Opção inválida!'); // Mensagem para opção inválida
    }
}
