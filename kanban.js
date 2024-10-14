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
const cardsArray = [];

// Função para enviar o formulário e criar um novo card
function enviarForm() {
    var descricao = document.getElementById("desc").value; 
    var tipo = document.getElementById("type").value; 
    var responsavel = document.getElementById("resp").value; 

    const id = Math.floor(1000 + Math.random() * 9000); // Gera um ID único para o card
   // criarCard(id, tipo, responsavel, descricao); 
    esconderModal(); 

    // Adiciona o card ao array como um objeto
    cardsArray.push({
        id: id,
        tipo: tipo,
        responsavel: responsavel,
        descricao: descricao,
        coluna: 'abertos' // Coluna inicial do card
    });

    atualizarColunas();

    console.log(cardsArray);
}

// Função para criar o html do card
function criarCard(id, tipoText, responsavelText, descricaoText, coluna) {
   

    const card = document.createElement("div"); 
    card.classList.add("card"); 
    card.dataset.id = id; // Atribui o ID como um atributo data ao card

    const header = document.createElement("div");
    header.classList.add("header");
    const tipo = document.createElement("span");
    tipo.textContent = tipoText;
    header.appendChild(tipo);
    card.appendChild(header);

    const body = document.createElement("div");
    body.classList.add("body");
    const text = document.createElement("span");
    text.classList.add("text");
    text.textContent = descricaoText;
    body.appendChild(text);
    card.appendChild(body);

    const footer = document.createElement("div");
    footer.classList.add("footer");
    const responsavel = document.createElement("span");
    responsavel.textContent = responsavelText;
    const button = document.createElement("button");
    button.classList.add("button-generico");
    button.textContent = '...';
    button.onclick =function(){
        moverCard(id);
    }
    footer.appendChild(responsavel);
    footer.appendChild(button);
    card.appendChild(footer);

    if(coluna == 'abertos'){
        colunaAbertos.appendChild(card);
    }
    else if (coluna == 'executados'){
        colunaExecutados.appendChild(card);
    }

//     // Adicionar um evento para mover o card entre colunas
//     card.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('text/plain', id);
//     });

//     // Tornar o card "arrastável"
//     card.setAttribute('draggable', true);
 }

// // Função para mover o card entre colunas
// function moverCard(event, colunaDestino) {
//     event.preventDefault();
//     const cardId = event.dataTransfer.getData('text/plain');
//     const card = document.querySelector(`[data-id='${cardId}']`);
//     const coluna = document.getElementById(colunaDestino);

//     // Mover o card visualmente
//     coluna.appendChild(card);

//     // Atualizar o array com a nova coluna do card
//     const cardObj = cardsArray.find(c => c.id == cardId);
//     if (cardObj) {
//         cardObj.coluna = colunaDestino;
//     }

//     console.log(cardsArray);
// }

// // Função para permitir o drop em uma coluna
// function permitirDrop(event) {
//     event.preventDefault();
// }

// // Adicionando event listeners para as colunas que receberão os cards
// document.querySelectorAll('.coluna').forEach(coluna => {
//     const main = coluna.querySelector('.main');
//     if (main) {
//         main.addEventListener('dragover', permitirDrop);
//         main.addEventListener('drop', (event) => moverCard(event, main.id));
//     }
// });

// Função para exibir o modal
function mostrarModal() {
    var modal = document.getElementById("mymodal"); 
    var overlay = document.getElementById("modalOverlay"); 
    modal.style.display = "flex";
    overlay.style.display = "flex";
}

// Função para esconder o modal
function esconderModal() {
    var modal = document.getElementById("mymodal"); 
    var overlay = document.getElementById("modalOverlay");
    modal.style.display = "none";
    overlay.style.display = "none";
}


function atualizarColunas() {
  
    colunaAbertos.innerHTML ='';
    colunaExecutados.innerHTML='';
    cardsArray.forEach(function(item){
        criarCard(item.id, item.tipo, item.responsavel, item.descricao, item.coluna);
    });


}

function moverCard(id){
    cardsArray.forEach(function(item){
        if (item.id == id){  
            item.coluna = 'executados'
        }
    })
    atualizarColunas();
}