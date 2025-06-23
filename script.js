const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O alarme toca! Uma ameaça global se aproxima e você precisa agir. Qual sua primeira reação?",
        alternativas: [
            {
                texto: "Visto meu uniforme, pego meus gadgets e corro para o perigo. O dever me chama!",
                afirmacao: "Você é um **Herói da Ação**! Sempre pronto para a batalha, sua coragem é inabalável. No futuro, você pode se tornar um vigilante como **Batman** ou um velocista como o **Flash**."
            },
            {
                texto: "Analiso a situação, crio um plano estratégico e mobilizo meus aliados. A inteligência é a chave!",
                afirmacao: "Você é um **Estrategista Genial**! Sua mente brilhante planeja cada passo. No futuro, você pode ser um líder como o **Homem de Ferro** ou um gênio tático como o **Capitão América**."
            }
        ]
    },
    {
        enunciado: "Durante um confronto épico, um civil inocente fica em perigo. O que você faz?",
        alternativas: [
            {
                texto: "Uso meus poderes/habilidades para protegê-lo, mesmo que isso signifique me expor ao risco. Vidas em primeiro lugar!",
                afirmacao: "Sua empatia e altruísmo o tornam um **Protetor Incansável**! Você sempre coloca os outros antes de si. No futuro, você pode ser o **Superman** ou a **Mulher Maravilha**, um verdadeiro símbolo de esperança."
            },
            {
                texto: "Neutralizo a ameaça rapidamente para garantir a segurança de todos, minimizando danos colaterais. Eficiência é crucial!",
                afirmacao: "Você é um **Justiçeiro Pragmático**! Foca na solução mais eficaz para o bem maior. No futuro, você pode ser o **Deadpool** (com menos sarcasmo, talvez?) ou um justiceiro como o **Justiceiro**, garantindo que a ordem seja restaurada."
            }
        ]
    },
    {
        enunciado: "Após uma batalha intensa, você precisa se recuperar e aprimorar suas habilidades. Qual sua abordagem?",
        alternativas: [
            {
                texto: "Treino incansavelmente, aprimorando minhas técnicas de combate e explorando o limite dos meus poderes. Nunca é demais!",
                afirmacao: "Você é um **Guerreiro em Evolução**! Busca constantemente a excelência física e mental. No futuro, você pode se tornar um mestre em artes marciais como o **Punho de Ferro** ou um estrategista de combate como a **Viúva Negra**."
            },
            {
                texto: "Estudo novas tecnologias, desenvolvo gadgets e busco conhecimento para superar os próximos desafios. A mente é minha maior arma!",
                afirmacao: "Você é um **Cientista Visionário**! Sua paixão por inovação impulsiona seu crescimento. No futuro, você pode ser um inventor como o **Homem-Aranha** ou um brilhante cientista como o **Sr. Fantástico**."
            }
        ]
    },
    {
        enunciado: "Um novo vilão surge, mas ele parece ser um mal-entendido. O que você faz?",
        alternativas: [
            {
                texto: "Tento conversar, entender suas motivações e buscar uma solução pacífica antes de usar a força. Nem todo vilão é irrecuperável.",
                afirmacao: "Você é um **Diplomata da Paz**! Acredita na redenção e no poder do diálogo. No futuro, você pode ser um líder como o **Professor X** ou um apaziguador como a **Tempestade**."
            },
            {
                texto: "Analiso seus pontos fracos e desenvolvo uma estratégia para neutralizá-lo rapidamente, prevenindo maiores danos. A segurança é primordial.",
                afirmacao: "Você é um **Executor da Justiça**! Age com firmeza para proteger o mundo. No futuro, você pode ser um estrategista militar como o **Nick Fury** ou um herói implacável como o **Ciclope**."
            }
        ]
    },
    {
        enunciado: "O que te motiva a ser um herói?",
        alternativas: [
            {
                texto: "A glória, o reconhecimento e a chance de ser lembrado como uma lenda. Quero inspirar a todos!",
                afirmacao: "Sua busca por reconhecimento pode levá-lo a ser um **Herói Ambicioso**! Mas lembre-se: com grandes poderes vêm grandes responsabilidades. No futuro, você pode ser um **Lanterna Verde** buscando a luz, ou um herói que às vezes se perde, como o **Homem de Ferro** (antes de se tornar um Vingador)."
            },
            {
                texto: "A responsabilidade de proteger os inocentes e fazer a diferença no mundo. Meu propósito é servir!",
                afirmacao: "Você é um **Guardião Altruísta**! Seu coração é puro e seu propósito é nobre. No futuro, você pode se tornar um farol de esperança como o **Capitão América** ou um protetor da humanidade como o **Hulk** (com controle, claro!)."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No futuro, baseado nas suas escolhas, você se tornará...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; // Limpa os botões
    // Adicionar um botão para reiniciar o quiz
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Começar de Novo";
    botaoReiniciar.addEventListener("click", reiniciarQuiz);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
    caixaResultado.style.display = "block"; // Garante que a caixa de resultado esteja visível
}

mostraPergunta();