// Função para exibir o modal
function mostrarModal() {
    var modal = document.getElementById("mymodal"); // Obtém o elemento modal pelo ID "mymodal"
    var overlay = document.getElementById("modalOverlay"); // Obtém o elemento overlay pelo ID "modalOverlay"
    modal.style.display = "flex"; // Define o display do modal como "flex" para torná-lo visível
    overlay.style.display = "flex"; // Define o display do overlay como "flex" para tornar o fundo escurecido visível

    // Este código foi comentado e não será executado
    /*
    var teste = 'ABRIU O MODAL';
    console.log(teste); // Mostra no console que o modal foi aberto
    */
}

// Função para enviar o formulário e criar um novo card
function enviarForm(){
    var descricao = document.getElementById("desc").value; // Obtém o valor do campo "descricao"
    var tipo = document.getElementById("type").value; // Obtém o valor do campo "tipo"
    var responsavel = document.getElementById("resp").value; // Obtém o valor do campo "responsavel"

    criarCard(tipo, responsavel, descricao); // Chama a função para criar um card com os valores coletados
    esconderModal(); // Chama a função para fechar o modal

    console.log(descricao); // Exibe a descrição no console
    console.log(responsavel); // Exibe o responsável no console
    console.log(tipo); // Exibe o tipo no console
}

// Função para esconder o modal
function esconderModal(){
    var modal = document.getElementById("mymodal"); // Obtém o elemento modal pelo ID "mymodal"
    var overlay = document.getElementById("modalOverlay"); // Obtém o elemento overlay pelo ID "modalOverlay"
    modal.style.display = "none"; // Define o display do modal como "none" para escondê-lo
    overlay.style.display = "none"; // Define o display do overlay como "none" para escondê-lo
}

// Função para criar um novo card com os dados do formulário
function criarCard(tipoText, responsavelText, descricaoText) {
    const coluna = document.getElementById("abertosMain"); // Obtém o elemento onde o card será inserido

    const card = document.createElement("div"); // Cria um novo elemento div para o card
    card.classList.add("card"); // Adiciona a classe "card" ao novo elemento

    const header = document.createElement("div"); // Cria a div para o cabeçalho do card
    header.classList.add("header"); // Adiciona a classe "header" à div do cabeçalho
    const tipo = document.createElement("span"); // Cria um elemento span para o tipo
    tipo.textContent = tipoText; // Define o texto do span como o valor do tipo
    header.appendChild(tipo); // Adiciona o span do tipo ao cabeçalho

    card.appendChild(header); // Adiciona o cabeçalho ao card

    const body = document.createElement("div"); // Cria a div para o corpo do card
    body.classList.add("body"); // Adiciona a classe "body" à div do corpo
    const id = document.createElement("span"); // Cria um elemento span para o ID
    id.classList.add("id"); // Adiciona a classe "id" ao span do ID
    id.textContent = '4321'; // Define o ID como '4321' (este ID está fixo no código)
    const text = document.createElement("span"); // Cria um elemento span para o texto da descrição
    text.classList.add("text"); // Adiciona a classe "text" ao span da descrição
    text.textContent = descricaoText; // Define o texto da descrição com o valor recebido
    body.appendChild(id); // Adiciona o span do ID ao corpo do card
    body.appendChild(text); // Adiciona o span do texto ao corpo do card

    card.appendChild(body); // Adiciona o corpo ao card

    const footer = document.createElement("div"); // Cria a div para o rodapé do card
    footer.classList.add("footer"); // Adiciona a classe "footer" ao rodapé
    const responsavel = document.createElement("span"); // Cria um elemento span para o responsável
    responsavel.textContent = responsavelText; // Define o texto do span como o valor do responsável
    const toolbar = document.createElement("button"); // Cria um botão para o card
    toolbar.classList.add("button-generico"); // Adiciona a classe "button-generico" ao botão
    toolbar.textContent = '...'; // Define o texto do botão como '...'
    footer.appendChild(responsavel); // Adiciona o span do responsável ao rodapé
    footer.appendChild(toolbar); // Adiciona o botão ao rodapé

    card.appendChild(footer); // Adiciona o rodapé ao card

    coluna.appendChild(card); // Adiciona o card completo à coluna onde ele deve aparecer
}

const idsGerados = new Set(); // Usamos um Set para armazenar IDs únicos


// Função para gerar IDs únicos de 4 dígitos
function gerarIdUnico() {
    let id; // Declara a variável 'id' que irá armazenar o ID gerado
    do {
        // Gera um número aleatório entre 1000 e 9999
        id = Math.floor(1000 + Math.random() * 9000); 
    } while (idsGerados.has(id)); // Verifica se o ID já existe no Set 'idsGerados'. Se existir, repete a geração.

    idsGerados.add(id); // Adiciona o novo ID ao Set 'idsGerados' para garantir que ele não será repetido no futuro
    return id; // Retorna o ID gerado
}







// const nome = "Joel"; // string
// const idade = 28; // number - inteiro
// const altura = 1.79; //number - decimal
// const estaEmpregado = true; // booleano (true ou false)

// const listaQualquer = [1, 'teste', true, 2]; // array
// const alunos = ['Kelly', "Davi"];
// const a = [true, false, false, true, true];

// const pessoa = { nome: 'Joel', idade: 28, altura: 1.79, estaEmpregado: true };

// const ticket_1 = {
//     id: 1,
//     descricao: "Consertar ar-condicionado",
//     tipo: "Procedimento",
//     responsavel: "Kelly",
// };

// const ticket_2 = {
//     id: 2,
//     descricao: "Pintar parede externa",
//     tipo: "Predial",
//     responsavel: "Joel",
// };

// const tickets_abertos = [ticket_1, ticket_2];

