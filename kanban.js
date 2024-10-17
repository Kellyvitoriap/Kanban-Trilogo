// Função para gerar IDs únicos de 4 dígitos
/*function gerarIdUnico() {
    let id;
    do {
        id = Math.floor(1000 + Math.random() * 9000); 
    } while (cardsArray.find(card => card.id === id)); 

    return id;
}*/

// Array global para armazenar os cards como objetos 
const colunaAbertos = document.getElementById("abertosMain"); 
const colunaExecutados = document.getElementById("executadosMain"); 
const colunaVistoriados = document.getElementById("vistoriadosMain"); 
const colunaArquivados = document.getElementById("arquivadosMain"); 
const cardsArray = []; // Array que guarda todos os cards criados como objetos

// Função para enviar o formulário e criar um novo card
function enviarForm() {
    var descricao = document.getElementById("desc").value; // Pega o valor do campo de descrição do formulário
    var tipo = document.getElementById("type").value; // Pega o valor do campo de tipo
    var responsavel = document.getElementById("resp").value; // Pega o valor do campo de responsável

    const id = Math.floor(1000 + Math.random() * 9000); // Gera um ID único para o card com base em um número aleatório
   // criarCard(id, tipo, responsavel, descricao); // Esta linha está comentada, pois a criação visual é feita em outra parte do código
    esconderModal(); // Fecha o modal após a criação do card

    // Adiciona o card ao array como um objeto com as propriedades capturadas e define a coluna inicial como 'abertos'
    cardsArray.push({
        id: id,
        tipo: tipo,
        responsavel: responsavel,
        descricao: descricao,
        coluna: 'abertos' // Coluna inicial do card
    });

    atualizarColunas(); // Chama a função para atualizar a exibição das colunas e mostrar o novo card

    console.log(cardsArray); // Mostra o array no console para fins de depuração
}

// Função para criar o HTML do card
function criarCard(id, tipoText, responsavelText, descricaoText, coluna) {
    const card = document.createElement("div"); // Cria o elemento div que representará o card
    card.classList.add("card"); // Adiciona a classe CSS 'card' ao elemento
    card.dataset.id = id; // Atribui o ID como um atributo 'data' ao card para facilitar sua identificação

    // Cria o header do card e adiciona o tipo de tarefa
    const header = document.createElement("div");
    header.classList.add("header");
    const tipo = document.createElement("span");
    tipo.textContent = tipoText;
    header.appendChild(tipo);
    card.appendChild(header);

    // Cria o corpo do card e adiciona a descrição
    const body = document.createElement("div");
    body.classList.add("body");
    const text = document.createElement("span");
    text.classList.add("text");
    text.textContent = descricaoText;
    body.appendChild(text);
    card.appendChild(body);

    // Cria o rodapé do card e adiciona o responsável e um botão
    const footer = document.createElement("div");
    footer.classList.add("footer");
    const responsavel = document.createElement("span");
    responsavel.textContent = responsavelText;
    const button = document.createElement("button");
    button.classList.add("button-generico");
    button.textContent = '...';
    // Define o evento de clique para mover o card para a próxima coluna
    button.onclick = function() {
        moverCard(id);
    };
    footer.appendChild(responsavel);
    footer.appendChild(button);
    card.appendChild(footer);

    // Adiciona o card na coluna correspondente com base na propriedade 'coluna' do objeto
    if(coluna == 'abertos'){
        colunaAbertos.appendChild(card);
    } else if (coluna == 'executados'){
    //     colunaExecutados.appendChild(card);
    // } else if (coluna == 'vistoriados'){
    //     colunaVistoriados.appendChild(card);
    // } else if (coluna == 'arquivados'){
    //     colunaArquivados.appendChild(card);
    // }
    }
}

// Função para exibir o modal
function mostrarModal() {
    var modal = document.getElementById("mymodal"); 
    var overlay = document.getElementById("modalOverlay"); 
    modal.style.display = "flex"; // Exibe o modal
    overlay.style.display = "flex"; // Exibe o overlay
}

// Função para esconder o modal
function esconderModal() {
    var modal = document.getElementById("mymodal"); 
    var overlay = document.getElementById("modalOverlay");
    modal.style.display = "none"; // Esconde o modal
    overlay.style.display = "none"; // Esconde o overlay
}

// Função para atualizar as colunas, limpando e reconstruindo o conteúdo com base nos cards armazenados no array
function atualizarColunas() {
    colunaAbertos.innerHTML = ''; // Limpa a coluna 'Abertos'
    colunaExecutados.innerHTML = ''; // Limpa a coluna 'Executados'
    colunaVistoriados.innerHTML = ''; // Limpa a coluna 'Vistoriados'
    colunaArquivados.innerHTML = ''; // Limpa a coluna 'Arquivados'

    // Itera sobre cada card no array e o recria na coluna apropriada
    cardsArray.forEach(function(item) {
        criarCard(item.id, item.tipo, item.responsavel, item.descricao, item.coluna);
    });
}

// Função para mover o card para a próxima coluna
function moverCard(id) {
    cardsArray.forEach(function(item) {
        if (item.id == id) {  // Encontra o card pelo ID
            // Atualiza a coluna do card com base na coluna atual
            if (item.coluna === 'abertos') {
                item.coluna = 'executados';
            } else if (item.coluna === 'executados') {
                item.coluna = 'vistoriados';
            } else if (item.coluna === 'vistoriados') {
                item.coluna = 'arquivados';
            } else if (item.coluna === 'arquivados') {
                item.coluna = 'abertos'; // Retorna para 'Abertos' se estiver em 'Arquivados'
            }
        }
    });
    atualizarColunas(); // Atualiza a interface após mover o card
}
