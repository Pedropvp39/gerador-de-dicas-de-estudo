//Cria um array com pelo menos 6 dicas de estudo
////////OBS: as frases nao foi eu que criei /////////////
const dicasDeEstudo = [
    "Faça pausas curtas a cada 45-60 minutos de estudo (Técnica Pomodoro).",
    "Revise o material estudado em até 24 horas para fixar o conhecimento.",
    "Ensine o que você aprendeu para alguém. Se você consegue ensinar, você realmente aprendeu.",
    "Crie mapas mentais ou resumos visuais para organizar as ideias principais.",
    "Elimine as distrações (coloque o celular no modo avião ou longe de você).",
    "Varie os locais de estudo para melhorar a retenção da memória.",
    "Durma bem. O sono é essencial para consolidar o aprendizado do dia.",
    "Defina metas claras para cada sessão de estudo."
];

// Captura os elementos HTML usando document.querySelector()
const dicaDisplay = document.querySelector('#dica-display');
const gerarDicaBtn = document.querySelector('#gerar-dica-btn');

// Cria uma função gerarDica() que sorteia e exibe uma dica aleatória
function gerarDica() {
    // Sorteia um índice aleatório baseado no tamanho do array
    const indiceAleatorio = Math.floor(Math.random() * dicasDeEstudo.length);
    
    // Pega a dica no índice sorteado
    const dicaSorteada = dicasDeEstudo[indiceAleatorio];
    
    // Exibe a dica no parágrafo do HTML
    dicaDisplay.textContent = dicaSorteada;
}

// Usa addEventListener() para interagir com o botão
// Ao clicar no botão, a função gerarDica e executada de imediato
gerarDicaBtn.addEventListener('click', gerarDica);